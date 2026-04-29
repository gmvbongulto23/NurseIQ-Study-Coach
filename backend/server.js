const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const multer = require("multer");
const OpenAI = require("openai");
const pdfParse = require("pdf-parse");
const path = require("path");

dotenv.config({ path: path.join(__dirname, ".env") });
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const app = express();
const PORT = process.env.PORT || 3000;
const AI_MODEL = process.env.AI_MODEL || process.env.OPENROUTER_MODEL || "gemini-2.5-flash";
const isGeminiModel = AI_MODEL.startsWith("gemini-");
const AI_BASE_URL =
  process.env.AI_BASE_URL ||
  process.env.OPENROUTER_BASE_URL ||
  (isGeminiModel
    ? "https://generativelanguage.googleapis.com/v1beta/openai/"
    : "https://openrouter.ai/api/v1");
const API_KEY = process.env.OPENROUTER_API_KEY || process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY;

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
  fileFilter: (_req, file, callback) => {
    const isPdf = file.mimetype === "application/pdf" || file.originalname.toLowerCase().endsWith(".pdf");
    callback(isPdf ? null : new Error("Only PDF files are supported."), isPdf);
  },
});

const aiClient = new OpenAI({
  apiKey: API_KEY || "missing-api-key",
  baseURL: AI_BASE_URL,
  defaultHeaders: {
    "HTTP-Referer": process.env.APP_URL || "http://localhost:3000",
    "X-Title": "NurseIQ Study Coach",
  },
});

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "..", "frontend")));

const JSON_SHAPE = `[
  {
    "prompt": "",
    "options": ["", "", "", ""],
    "answer": 0,
    "rationale": ""
  }
]`;

function getProviderName() {
  if (isGeminiModel) {
    return "gemini";
  }

  if (AI_BASE_URL.includes("groq.com")) {
    return "groq";
  }

  return "openrouter";
}

function requireApiKey() {
  if (!API_KEY) {
    const error = new Error("Set OPENROUTER_API_KEY, GEMINI_API_KEY, or OPENAI_API_KEY in .env.");
    error.statusCode = 500;
    throw error;
  }
}

function buildQuestionPrompt(sourceText, sourceType) {
  const sourceLabel = sourceType === "pdf" ? "uploaded nursing study material" : "nursing topic";

  return `
You are NurseIQ Study Coach, an expert nursing educator.

Generate exactly 5 NCLEX-style multiple choice questions from the ${sourceLabel} below.

Rules:
- Return STRICT JSON only.
- Return a JSON array, not an object.
- Do not use markdown fences.
- Each array item must contain exactly these keys: prompt, options, answer, rationale.
- options must contain exactly 4 answer choices.
- answer must be a zero-based integer index from 0 to 3.
- rationales must be concise and explain why the correct answer is safest or most clinically appropriate.
- Keep content appropriate for nursing exam prep.

Required JSON shape:
${JSON_SHAPE}

Source:
${sourceText}
`.trim();
}

function extractJsonArray(rawContent) {
  if (!rawContent || typeof rawContent !== "string") {
    throw new Error("AI response was empty.");
  }

  const withoutFences = rawContent
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();
  const start = withoutFences.indexOf("[");
  const end = withoutFences.lastIndexOf("]");

  if (start === -1 || end === -1 || end <= start) {
    throw new Error("AI response did not contain a JSON array.");
  }

  return withoutFences.slice(start, end + 1);
}

function normalizeQuestions(questions) {
  if (!Array.isArray(questions) || questions.length !== 5) {
    throw new Error("AI response must be an array of exactly 5 questions.");
  }

  return questions.map((question, questionIndex) => {
    const prompt = typeof question.prompt === "string" ? question.prompt.trim() : "";
    const options = Array.isArray(question.options) ? question.options.map((option) => String(option).trim()) : [];
    const answer = Number(question.answer);
    const rationale = typeof question.rationale === "string" ? question.rationale.trim() : "";

    if (!prompt) {
      throw new Error(`Question ${questionIndex + 1} is missing a prompt.`);
    }

    if (options.length !== 4 || options.some((option) => !option)) {
      throw new Error(`Question ${questionIndex + 1} must include exactly 4 options.`);
    }

    if (!Number.isInteger(answer) || answer < 0 || answer > 3) {
      throw new Error(`Question ${questionIndex + 1} has an invalid answer index.`);
    }

    if (!rationale) {
      throw new Error(`Question ${questionIndex + 1} is missing a rationale.`);
    }

    return {
      prompt,
      options,
      answer,
      rationale,
    };
  });
}

async function generateQuestionsFromSource(sourceText, sourceType) {
  requireApiKey();

  const completion = await aiClient.chat.completions.create({
    model: AI_MODEL,
    temperature: 0.35,
    messages: [
      {
        role: "system",
        content:
          "You generate nursing exam practice questions and always respond with valid strict JSON only.",
      },
      {
        role: "user",
        content: buildQuestionPrompt(sourceText, sourceType),
      },
    ],
  });

  const rawContent = completion.choices?.[0]?.message?.content || "";
  const parsed = JSON.parse(extractJsonArray(rawContent));
  return normalizeQuestions(parsed);
}

async function handleGenerateQuestions(req, res, next) {
  try {
    const topic = typeof req.body.topic === "string" ? req.body.topic.trim() : "";

    if (!topic) {
      return res.status(400).json({ error: "Topic is required." });
    }

    if (topic.length > 160) {
      return res.status(400).json({ error: "Topic must be 160 characters or fewer." });
    }

    const questions = await generateQuestionsFromSource(topic, "topic");
    res.json({ questions });
  } catch (error) {
    next(error);
  }
}

async function handleUploadFile(req, res, next) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Upload a PDF file." });
    }

    const parsedPdf = await pdfParse(req.file.buffer);
    const extractedText = parsedPdf.text.replace(/\s+/g, " ").trim();

    if (!extractedText) {
      return res.status(400).json({ error: "No readable text was found in the PDF." });
    }

    const sourceText = extractedText.slice(0, 18000);
    const questions = await generateQuestionsFromSource(sourceText, "pdf");
    res.json({
      questions,
      extractedCharacters: extractedText.length,
      usedCharacters: sourceText.length,
    });
  } catch (error) {
    next(error);
  }
}

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    model: AI_MODEL,
    provider: getProviderName(),
  });
});

app.post("/generate-questions", handleGenerateQuestions);
app.post("/api/generate-questions", handleGenerateQuestions);
app.post("/upload-file", upload.single("file"), handleUploadFile);
app.post("/api/upload-file", upload.single("file"), handleUploadFile);

app.use((error, _req, res, _next) => {
  const statusCode =
    error.statusCode ||
    error.status ||
    (error.message === "Only PDF files are supported." ? 400 : 500);
  const providerName = getProviderName();
  const message =
    statusCode === 429
      ? `AI provider rate limit reached for ${providerName}. Wait a few minutes, use fewer requests, or upgrade the API quota.`
      : error.message || "Something went wrong while generating questions.";

  console.error(error);
  res.status(statusCode).json({
    error: message,
  });
});

app.listen(PORT, () => {
  console.log(`NurseIQ backend running on port ${PORT}`);
});
