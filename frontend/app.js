const studyTopics = [
  {
    id: "fundamentals",
    name: "Fundamentals",
    description: "Safety, infection control, positioning, delegation, and basic patient care.",
    questions: [
      {
        prompt: "Which patient should the nurse assess first after receiving shift report?",
        options: [
          "A patient with chronic pain requesting medication",
          "A postoperative patient with a respiratory rate of 8/min",
          "A patient scheduled for discharge needing teaching",
          "A stable patient asking for a blanket",
        ],
        answer: 1,
        rationale:
          "Airway and breathing take priority. A respiratory rate of 8/min after surgery may indicate opioid-induced respiratory depression.",
      },
      {
        prompt: "Which action best helps prevent catheter-associated urinary tract infection?",
        options: [
          "Disconnect the tubing daily to clean the drainage bag",
          "Keep the drainage bag below bladder level",
          "Irrigate the catheter every shift",
          "Clamp the catheter before ambulation",
        ],
        answer: 1,
        rationale:
          "Keeping the drainage bag below the bladder promotes unobstructed flow and reduces backflow contamination.",
      },
      {
        prompt: "A nurse is delegating tasks to an assistive personnel. Which task is appropriate?",
        options: [
          "Assessing a newly admitted patient",
          "Teaching a patient how to use an incentive spirometer",
          "Obtaining routine vital signs on a stable patient",
          "Evaluating pain medication effectiveness",
        ],
        answer: 2,
        rationale:
          "Routine tasks for stable patients can be delegated to trained assistive personnel, while assessment and evaluation stay with the nurse.",
      },
      {
        prompt: "Which finding requires immediate intervention during enteral feeding?",
        options: [
          "Residual volume of 20 mL",
          "Head of bed elevated to 35 degrees",
          "New onset coughing and dyspnea",
          "Formula at room temperature",
        ],
        answer: 2,
        rationale:
          "Coughing and dyspnea during enteral feeding raise concern for aspiration, which requires immediate action.",
      },
      {
        prompt: "Which statement by a student nurse shows understanding of standard precautions?",
        options: [
          "I only wear gloves when I expect contact with blood.",
          "I need goggles only for patients with known infections.",
          "I should use hand hygiene before and after patient contact.",
          "I can recap used needles if I am careful.",
        ],
        answer: 2,
        rationale:
          "Hand hygiene before and after patient contact is a core element of standard precautions for all patients.",
      },
    ],
    flashcards: [
      {
        front: "Priority framework",
        back: "Use ABCs, then safety risks, then acute changes, then unstable before stable patients.",
      },
      {
        front: "Delegation reminder",
        back: "Delegate routine, predictable, low-risk tasks. Do not delegate assessment, teaching, judgment, or evaluation.",
      },
      {
        front: "Standard precautions",
        back: "Apply to every patient: hand hygiene, gloves as needed, safe sharps handling, and PPE based on exposure risk.",
      },
    ],
  },
  {
    id: "pharmacology",
    name: "Pharmacology",
    description: "Drug classes, safe administration, adverse effects, and medication teaching.",
    questions: [
      {
        prompt: "Which laboratory value is most important before administering digoxin?",
        options: ["Hemoglobin", "Potassium", "Platelet count", "Sodium"],
        answer: 1,
        rationale:
          "Hypokalemia increases the risk of digoxin toxicity, so potassium level is essential to review.",
      },
      {
        prompt: "Which instruction should the nurse include for a patient taking warfarin?",
        options: [
          "Increase intake of leafy green vegetables each day",
          "Take aspirin for mild headache unless bleeding occurs",
          "Report unusual bruising or bleeding",
          "Stop the medication once INR becomes therapeutic",
        ],
        answer: 2,
        rationale:
          "Patients taking warfarin should report bleeding signs promptly because anticoagulation increases bleeding risk.",
      },
      {
        prompt: "A nurse prepares to give insulin lispro. When should this medication be administered?",
        options: [
          "30 minutes before meals",
          "Immediately before meals",
          "At bedtime only",
          "Once weekly",
        ],
        answer: 1,
        rationale:
          "Insulin lispro is rapid acting and is typically given right before meals to match glucose intake.",
      },
      {
        prompt: "Which adverse effect should the nurse monitor when giving opioids?",
        options: ["Tachycardia", "Respiratory depression", "Hypertension", "Polyuria"],
        answer: 1,
        rationale:
          "Respiratory depression is a major opioid risk and requires close monitoring.",
      },
      {
        prompt: "What is the best action if a patient questions a medication that looks unfamiliar?",
        options: [
          "Tell the patient to trust the medication administration record",
          "Withhold the medication until it is verified",
          "Ask another patient if they have taken it before",
          "Give half the dose first",
        ],
        answer: 1,
        rationale:
          "Medication safety comes first. The nurse should verify the drug before administration.",
      },
    ],
    flashcards: [
      {
        front: "Digoxin hold parameters",
        back: "Check apical pulse and potassium. Watch for nausea, vision changes, and bradycardia.",
      },
      {
        front: "Warfarin teaching",
        back: "Maintain consistent vitamin K intake, monitor INR, and report bleeding or black stools.",
      },
      {
        front: "Rapid-acting insulin",
        back: "Begins working quickly, so coordinate with meals to avoid hypoglycemia.",
      },
    ],
  },
  {
    id: "medsurg",
    name: "Med-Surg",
    description: "Cardiac, respiratory, renal, endocrine, and postoperative nursing care.",
    questions: [
      {
        prompt: "Which finding in a patient with heart failure should be reported immediately?",
        options: [
          "2+ ankle edema",
          "Weight gain of 2.2 lb in one day",
          "Mild fatigue after walking",
          "Urine output of 900 mL in 24 hours",
        ],
        answer: 1,
        rationale:
          "A rapid weight gain of 2.2 lb in a day suggests fluid retention and worsening heart failure.",
      },
      {
        prompt: "A patient with COPD has oxygen saturation of 88%. Which action is appropriate?",
        options: [
          "Increase oxygen to 10 L/min by nonrebreather immediately",
          "Assess the patient, breathing effort, and prescribed oxygen range",
          "Remove oxygen to avoid suppressing respiratory drive",
          "Place the patient flat in bed",
        ],
        answer: 1,
        rationale:
          "COPD patients should be assessed and titrated within the prescribed target range rather than reflexively increasing or removing oxygen.",
      },
      {
        prompt: "Which symptom is expected in hypoglycemia?",
        options: ["Warm dry skin", "Bradycardia", "Shakiness and diaphoresis", "Deep slow respirations"],
        answer: 2,
        rationale:
          "Shakiness and diaphoresis are common adrenergic signs of hypoglycemia.",
      },
      {
        prompt: "Which postoperative intervention helps prevent atelectasis?",
        options: [
          "Restrict oral fluids",
          "Encourage incentive spirometry and ambulation",
          "Keep the patient sedated",
          "Place the patient in Trendelenburg position",
        ],
        answer: 1,
        rationale:
          "Incentive spirometry and early ambulation promote lung expansion and reduce atelectasis risk.",
      },
      {
        prompt: "A patient reports chest pain unrelieved by rest. Which action takes priority?",
        options: [
          "Document the pain score in the chart",
          "Obtain vital signs and notify the provider using urgent assessment data",
          "Offer a warm blanket",
          "Ask the patient to wait until rounds",
        ],
        answer: 1,
        rationale:
          "Unrelieved chest pain may indicate cardiac ischemia and requires immediate assessment and escalation.",
      },
    ],
    flashcards: [
      {
        front: "Heart failure clue",
        back: "Daily weights are one of the most sensitive indicators of fluid retention.",
      },
      {
        front: "Post-op lung care",
        back: "Use incentive spirometry, cough and deep breathe, and ambulate early when safe.",
      },
      {
        front: "Hypoglycemia signs",
        back: "Think shaky, sweaty, hungry, tachycardic, confused, or irritable.",
      },
    ],
  },
  {
    id: "maternal",
    name: "Maternal-Newborn",
    description: "Labor, postpartum care, newborn safety, and pregnancy complications.",
    questions: [
      {
        prompt: "Which finding after delivery requires immediate follow-up?",
        options: [
          "Fundus firm at midline",
          "Moderate lochia rubra",
          "Boggy uterus with heavy bleeding",
          "Voiding 300 mL",
        ],
        answer: 2,
        rationale:
          "A boggy uterus and heavy bleeding suggest postpartum hemorrhage, often from uterine atony.",
      },
      {
        prompt: "A woman at 32 weeks reports sudden painless bright red vaginal bleeding. The nurse suspects:",
        options: ["Placenta previa", "Placental abruption", "Ectopic pregnancy", "Hyperemesis gravidarum"],
        answer: 0,
        rationale:
          "Placenta previa is associated with painless bright red bleeding in later pregnancy.",
      },
      {
        prompt: "Which newborn action helps prevent heat loss?",
        options: [
          "Delay drying the infant",
          "Place the infant near an open window",
          "Dry the newborn and initiate skin-to-skin contact",
          "Bathe the newborn immediately",
        ],
        answer: 2,
        rationale:
          "Drying and skin-to-skin contact help reduce evaporative heat loss and promote thermoregulation.",
      },
      {
        prompt: "Which statement by a postpartum client indicates a need for more teaching?",
        options: [
          "I should call if I soak a pad in an hour.",
          "I may have some cramping while breastfeeding.",
          "A fever and foul-smelling lochia can mean infection.",
          "It is normal for leg pain and redness to happen after delivery.",
        ],
        answer: 3,
        rationale:
          "Leg pain and redness may indicate thrombophlebitis and should be reported immediately.",
      },
      {
        prompt: "Which medication is commonly given to a newborn to prevent hemorrhagic disease?",
        options: ["Vitamin K", "Naloxone", "Oxytocin", "Rho(D) immune globulin"],
        answer: 0,
        rationale:
          "Vitamin K is routinely administered after birth to support clotting factor production.",
      },
    ],
    flashcards: [
      {
        front: "Postpartum hemorrhage clue",
        back: "Heavy bleeding with a boggy uterus often points to uterine atony. Massage the fundus and escalate quickly.",
      },
      {
        front: "Placenta previa",
        back: "Think painless bright red bleeding. Avoid vaginal exams unless specifically ordered.",
      },
      {
        front: "Newborn warming",
        back: "Dry, cover, skin-to-skin, and place a hat to reduce heat loss.",
      },
    ],
  },
];

const state = {
  activeTopicId: studyTopics[0].id,
  // NEW: stores the user's topic keyword input
  selectedTopic: "",
  // NEW: AI integration
  aiQuestions: [],
  quiz: {
    currentIndex: 0,
    selectedOption: null,
    score: 0,
    completed: false,
    answersChecked: false,
  },
  flashcards: {
    currentIndex: 0,
    showBack: false,
  },
  progress: loadProgress(),
  learningProfile: loadLearningProfile(),
};

const topicGrid = document.getElementById("topic-grid");
const quizTitle = document.getElementById("quiz-title");
const quizTopicBadge = document.getElementById("quiz-topic-badge");
const quizMeta = document.getElementById("quiz-meta");
// NEW: topic input references
const topicInput = document.getElementById("topic-input");
const applyTopicButton = document.getElementById("apply-topic");
const pdfUploadInput = document.getElementById("pdf-upload");
const uploadFileButton = document.getElementById("upload-file");
const aiStatus = document.getElementById("ai-status");
const quizArea = document.getElementById("quiz-area");
const flashcardTitle = document.getElementById("flashcard-title");
const flashcardCount = document.getElementById("flashcard-count");
const flashcardArea = document.getElementById("flashcard-area");
const questionsAnsweredEl = document.getElementById("questions-answered");
const bestScoreEl = document.getElementById("best-score");
const cardsMasteredEl = document.getElementById("cards-mastered");
const AI_TOPIC_ID = "ai-generated-topic";
const PDF_TOPIC_ID = "ai-generated-pdf";

document.getElementById("start-quiz").addEventListener("click", () => {
  resetQuiz();
  renderQuiz();
  quizArea.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("show-flashcards").addEventListener("click", () => {
  renderFlashcards();
  flashcardArea.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("surprise-me").addEventListener("click", () => {
  const builtInTopics = studyTopics.filter((topic) => !topic.isGenerated);
  const randomTopic = builtInTopics[Math.floor(Math.random() * builtInTopics.length)];
  setActiveTopic(randomTopic.id);
});

applyTopicButton.addEventListener("click", () => {
  const topic = topicInput.value.trim();

  if (!topic) {
    setAiStatus("Enter a topic before generating questions.", "error");
    return;
  }

  // UPDATED: use AI questions first, then fallback to local questions.
  generateAIQuestions(topic);
});

topicInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  event.preventDefault();
  const topic = topicInput.value.trim();

  if (!topic) {
    setAiStatus("Enter a topic before generating questions.", "error");
    return;
  }

  // UPDATED: use AI questions first, then fallback to local questions.
  generateAIQuestions(topic);
});

uploadFileButton?.addEventListener("click", () => {
  const file = pdfUploadInput?.files?.[0];

  if (!file) {
    setAiStatus("Choose a PDF file before generating questions.", "error");
    return;
  }

  generateQuestionsForPdf(file);
});

function getBackendUrl() {
  const configuredUrl =
    localStorage.getItem("nurseiq-backend-url") || localStorage.getItem("backend-url") || "";

  if (configuredUrl.trim()) {
    return configuredUrl.trim().replace(/\/+$/, "");
  }

  if (window.location.protocol === "file:") {
    return "http://localhost:3000";
  }

  return window.location.origin.replace(/\/+$/, "");
}

function setAiStatus(message, type = "") {
  if (!aiStatus) {
    return;
  }

  aiStatus.textContent = message;
  aiStatus.className = `ai-status${type ? ` ${type}` : ""}`;
  aiStatus.setAttribute("aria-busy", type === "loading" ? "true" : "false");
}

function setAiControlsLoading(isLoading) {
  [applyTopicButton, uploadFileButton, topicInput, pdfUploadInput].forEach((control) => {
    if (control) {
      control.disabled = isLoading;
    }
  });
}

function normalizeGeneratedQuestions(questions, topicId, topicName, topicDescription) {
  if (!Array.isArray(questions) || questions.length !== 5) {
    throw new Error("The backend returned an invalid question set.");
  }

  return questions.map((question, questionIndex) => {
    const answer = Number(question.answer);
    const options = Array.isArray(question.options)
      ? question.options.map((option) => String(option).trim())
      : [];

    if (
      typeof question.prompt !== "string" ||
      !question.prompt.trim() ||
      options.length !== 4 ||
      options.some((option) => !option) ||
      !Number.isInteger(answer) ||
      answer < 0 ||
      answer > 3 ||
      typeof question.rationale !== "string" ||
      !question.rationale.trim()
    ) {
      throw new Error(`Question ${questionIndex + 1} was not valid strict JSON.`);
    }

    return {
      prompt: question.prompt.trim(),
      options,
      answer,
      rationale: question.rationale.trim(),
      topicId,
      topicName,
      topicDescription,
    };
  });
}

async function readApiError(response) {
  try {
    const data = await response.json();
    return data.error || "Question generation failed.";
  } catch {
    return "Question generation failed.";
  }
}

async function fetchGeneratedQuestions(endpoint, requestOptions) {
  const response = await fetch(`${getBackendUrl()}${endpoint}`, requestOptions);

  if (!response.ok) {
    throw new Error(await readApiError(response));
  }

  const data = await response.json();
  const questions = Array.isArray(data) ? data : data.questions;

  if (!Array.isArray(questions)) {
    throw new Error("The backend response did not include questions.");
  }

  return questions;
}

// NEW: AI integration
async function generateAIQuestions(topic) {
  state.selectedTopic = topic.toLowerCase();
  setAiStatus(`Generating NCLEX-style questions for "${topic}"...`, "loading");
  setAiControlsLoading(true);

  try {
    const questions = await fetchGeneratedQuestions("/generate-questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic }),
    });

    state.aiQuestions = normalizeGeneratedQuestions(
      questions,
      AI_TOPIC_ID,
      `AI: ${topic}`,
      `AI-generated NCLEX-style questions about ${topic}.`
    );
    resetQuiz();
    renderQuiz();
    setAiStatus("AI quiz loaded. Pick an answer to begin.", "success");
  } catch (err) {
    console.error("AI generation failed", err);
    state.aiQuestions = [];
    resetQuiz();
    renderQuiz();
    setAiStatus(
      `AI unavailable: ${err.message}. Showing matching local questions instead.`,
      "error"
    );
  } finally {
    setAiControlsLoading(false);
  }
}

function upsertGeneratedTopic({ id, name, description, questions }) {
  const normalizedQuestions = normalizeGeneratedQuestions(questions, id, name, description);
  // UPDATED: PDF/generated-topic flows should not keep topic AI questions active.
  state.aiQuestions = [];
  const generatedTopic = {
    id,
    name,
    description,
    questions: normalizedQuestions,
    flashcards: [],
    isGenerated: true,
  };
  const existingIndex = studyTopics.findIndex((topic) => topic.id === id);

  if (existingIndex >= 0) {
    studyTopics[existingIndex] = generatedTopic;
  } else {
    studyTopics.push(generatedTopic);
  }

  state.activeTopicId = id;
  state.selectedTopic = "";
  resetQuiz();
  resetFlashcards();
  renderTopics();
  renderQuiz();
  renderFlashcards();
}

async function generateQuestionsForTopic(topic) {
  setAiStatus(`Generating NCLEX-style questions for "${topic}"...`, "loading");
  setAiControlsLoading(true);

  try {
    const questions = await fetchGeneratedQuestions("/generate-questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic }),
    });

    upsertGeneratedTopic({
      id: AI_TOPIC_ID,
      name: `AI: ${topic}`,
      description: `AI-generated NCLEX-style questions about ${topic}.`,
      questions,
    });
    setAiStatus("AI quiz loaded. Pick an answer to begin.", "success");
  } catch (error) {
    console.error("AI topic generation failed:", error);
    const fallbackTopic = studyTopics.find((studyTopic) => !studyTopic.isGenerated) || studyTopics[0];
    state.activeTopicId = fallbackTopic.id;
    state.selectedTopic = topic.toLowerCase();
    resetQuiz();
    resetFlashcards();
    renderTopics();
    renderQuiz();
    renderFlashcards();
    setAiStatus(
      `AI unavailable: ${error.message}. Showing matching local questions instead.`,
      "error"
    );
  } finally {
    setAiControlsLoading(false);
  }
}

async function generateQuestionsForPdf(file) {
  if (file.type && file.type !== "application/pdf") {
    setAiStatus("Only PDF uploads are supported.", "error");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);
  setAiStatus(`Reading "${file.name}" and generating questions...`, "loading");
  setAiControlsLoading(true);

  try {
    const questions = await fetchGeneratedQuestions("/upload-file", {
      method: "POST",
      body: formData,
    });

    upsertGeneratedTopic({
      id: PDF_TOPIC_ID,
      name: "AI: Uploaded PDF",
      description: `AI-generated NCLEX-style questions from ${file.name}.`,
      questions,
    });
    setAiStatus("PDF quiz loaded. Your uploaded content is ready for practice.", "success");
  } catch (error) {
    console.error("PDF generation failed:", error);
    const fallbackTopic = studyTopics.find((studyTopic) => !studyTopic.isGenerated) || studyTopics[0];
    state.activeTopicId = fallbackTopic.id;
    state.selectedTopic = "";
    resetQuiz();
    resetFlashcards();
    renderTopics();
    renderQuiz();
    renderFlashcards();
    setAiStatus(
      `PDF generation failed: ${error.message}. The built-in quiz is still available.`,
      "error"
    );
  } finally {
    setAiControlsLoading(false);
  }
}

function loadProgress() {
  const fallback = { questionsAnswered: 0, bestScore: 0, cardsMastered: 0 };
  try {
    const raw = localStorage.getItem("nurseiq-progress");
    return raw ? { ...fallback, ...JSON.parse(raw) } : fallback;
  } catch {
    return fallback;
  }
}

function saveProgress() {
  localStorage.setItem("nurseiq-progress", JSON.stringify(state.progress));
}

// NEW: load learning profile from localStorage
function loadLearningProfile() {
  const fallback = { topics: {} };
  try {
    const raw = localStorage.getItem("nurseiq-learning-profile");
    return raw ? { ...fallback, ...JSON.parse(raw) } : fallback;
  } catch {
    return fallback;
  }
}

// NEW: save learning profile to localStorage
function saveLearningProfile() {
  localStorage.setItem("nurseiq-learning-profile", JSON.stringify(state.learningProfile));
}

function getActiveTopic() {
  return studyTopics.find((topic) => topic.id === state.activeTopicId);
}

// NEW: calculate mastery score from topic stats
function calculateMastery(topic) {
  if (!topic || !topic.attempts) {
    return 0;
  }

  return Math.round((topic.correct / topic.attempts) * 100);
}

// NEW: classify mastery score into a simple level
function getMasteryLevel(score) {
  if (score >= 80) {
    return "strong";
  }
  if (score >= 50) {
    return "developing";
  }
  return "weak";
}

// NEW: update per-topic stats after each quiz answer
function updateTopicStats(topicId, isCorrect) {
  const currentTopicStats = state.learningProfile.topics[topicId] || {
    attempts: 0,
    correct: 0,
    mastery: 0,
  };

  currentTopicStats.attempts += 1;
  if (isCorrect) {
    currentTopicStats.correct += 1;
  }

  currentTopicStats.mastery = calculateMastery(currentTopicStats);
  currentTopicStats.masteryLevel = getMasteryLevel(currentTopicStats.mastery);

  state.learningProfile.topics[topicId] = currentTopicStats;
  saveLearningProfile();
}

// NEW: helper for identifying weak topics
function getWeakTopics() {
  return Object.entries(state.learningProfile.topics)
    .filter(([, topic]) => topic.mastery < 50)
    .map(([topicId]) => topicId);
}

// NEW: flatten all questions and attach topic metadata for keyword matching
function getAllQuestions() {
  const builtInQuestions = studyTopics
    .filter((topic) => !topic.isGenerated)
    .flatMap((topic) =>
      topic.questions.map((question) => ({
        ...question,
        topicId: topic.id,
        topicName: topic.name,
        topicDescription: topic.description,
      }))
    );
  
  return builtInQuestions;
}

// UPDATED: use AI questions first, then fallback to local question filtering.
function getQuizQuestions() {
  // NEW: AI integration
  if (state.aiQuestions.length) {
    return state.aiQuestions;
  }

  const keyword = state.selectedTopic.trim();

  if (!keyword) {
    const activeTopic = getActiveTopic();
    return activeTopic.questions.map((question) => ({
      ...question,
      topicId: activeTopic.id,
      topicName: activeTopic.name,
      topicDescription: activeTopic.description,
    }));
  }

  const allQuestions = getAllQuestions();
  const filteredQuestions = allQuestions.filter((question) => {
    const searchableText = [
      question.topicId,
      question.topicName,
      question.topicDescription,
      question.prompt,
      question.rationale,
      ...question.options,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(keyword);
  });

  return filteredQuestions.length ? filteredQuestions : allQuestions;
}

function getCurrentQuizQuestions() {
  const activeTopic = getActiveTopic();

  // UPDATED: topic-generated AI questions should override the active local topic.
  if (state.aiQuestions.length) {
    return getQuizQuestions();
  }

  if (activeTopic?.isGenerated) {
    return activeTopic.questions;
  }

  return getQuizQuestions();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function hashString(value) {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function seededRandom(seed) {
  let value = seed >>> 0;

  return () => {
    value += 0x6d2b79f5;
    let nextValue = value;
    nextValue = Math.imul(nextValue ^ (nextValue >>> 15), nextValue | 1);
    nextValue ^= nextValue + Math.imul(nextValue ^ (nextValue >>> 7), nextValue | 61);
    return ((nextValue ^ (nextValue >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle(items, seed) {
  const shuffledItems = [...items];
  const random = seededRandom(seed);

  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffledItems[index], shuffledItems[swapIndex]] = [
      shuffledItems[swapIndex],
      shuffledItems[index],
    ];
  }

  return shuffledItems;
}

function getDailyFlashcards(topic) {
  const cards = topic?.flashcards || [];
  const seed = hashString(`${topic?.id || "topic"}:${getLocalDateKey()}`);

  return seededShuffle(cards, seed);
}

function setActiveTopic(topicId) {
  state.activeTopicId = topicId;

  // UPDATED: reset custom topic and AI questions when switching topics
  state.selectedTopic = "";
  state.aiQuestions = [];
  if (topicInput) topicInput.value = "";

  resetQuiz();
  resetFlashcards();
  renderTopics();
  renderQuiz();
  renderFlashcards();
}

function resetQuiz() {
  state.quiz = {
    currentIndex: 0,
    selectedOption: null,
    score: 0,
    completed: false,
    answersChecked: false,
  };
}

function resetFlashcards() {
  state.flashcards = {
    currentIndex: 0,
    showBack: false,
  };
}

function renderTopics() {
  topicGrid.innerHTML = "";
  studyTopics.forEach((topic) => {
    const tile = document.createElement("article");
    tile.className = `topic-tile${topic.id === state.activeTopicId ? " is-active" : ""}`;
    const questionLabel = topic.isGenerated ? "AI quiz questions" : "quiz questions";

    tile.innerHTML = `
      <p class="topic-tag">${topic.questions.length} ${questionLabel}</p>
      <h3>${escapeHtml(topic.name)}</h3>
      <p class="topic-meta">${escapeHtml(topic.description)}</p>
      <button class="topic-button" type="button">Study ${escapeHtml(topic.name)}</button>
    `;

    tile.querySelector("button").addEventListener("click", () => setActiveTopic(topic.id));
    topicGrid.appendChild(tile);
  });
}

function renderQuiz() {
  const topic = getActiveTopic();
  const quizQuestions = getCurrentQuizQuestions();
  const question = quizQuestions[state.quiz.currentIndex];
  const isGeneratedTopic = Boolean(topic?.isGenerated);
  // NEW: AI integration
  const isAiQuestionSet = state.aiQuestions.length > 0;
  const displayTopicName = state.selectedTopic || topic.name;

  quizTitle.textContent = isAiQuestionSet
    ? "AI topic quiz"
    : isGeneratedTopic
    ? `${topic.name} quiz`
    : state.selectedTopic
    ? "Local fallback quiz"
    : `${topic.name} quiz`;
  quizTopicBadge.textContent = displayTopicName;
  quizMeta.textContent = isAiQuestionSet
    ? `${quizQuestions.length} AI-generated NCLEX-style questions with rationales.`
    : isGeneratedTopic
    ? `${quizQuestions.length} AI-generated NCLEX-style questions with rationales.`
    : state.selectedTopic
    ? `Showing local questions matching "${state.selectedTopic}"${quizQuestions.length === getAllQuestions().length ? " with fallback to all questions." : "."}`
    : `${quizQuestions.length}-question practice set with quick rationales to help you remember why the right answer matters.`;

  if (!question) {
    quizArea.innerHTML = `
      <div class="quiz-result">
        <p>No questions are available for this quiz yet.</p>
        <p>Choose a built-in track or generate a new AI quiz.</p>
      </div>
    `;
    return;
  }

  if (state.quiz.completed) {
    const percent = Math.round((state.quiz.score / quizQuestions.length) * 100);
    quizArea.innerHTML = `
      <div class="quiz-result">
        <p>You finished the ${escapeHtml(displayTopicName)} set.</p>
        <p><strong>Score:</strong> ${state.quiz.score}/${quizQuestions.length} (${percent}%)</p>
        <p>Review the flashcards next, then replay the quiz to improve your score.</p>
      </div>
      <div class="quiz-controls">
        <button class="quiz-submit" type="button" id="retry-quiz">Try again</button>
      </div>
    `;

    document.getElementById("retry-quiz").addEventListener("click", () => {
      resetQuiz();
      renderQuiz();
    });
    return;
  }

  quizArea.innerHTML = `
    <div class="question-block">
      <p class="question-progress">Question ${state.quiz.currentIndex + 1} of ${quizQuestions.length}</p>
      <p class="question-prompt">${escapeHtml(question.prompt)}</p>
      <div class="quiz-options">
        ${question.options
          .map(
            (option, index) => `
            <button class="option-button${state.quiz.selectedOption === index ? " selected" : ""}" data-index="${index}" type="button">
              ${escapeHtml(option)}
            </button>
          `
          )
          .join("")}
      </div>
      <div class="quiz-controls">
        <button class="quiz-submit" type="button" id="check-answer">Check answer</button>
      </div>
      ${state.quiz.answersChecked ? `<div class="answer-rationale">${escapeHtml(question.rationale)}</div>` : ""}
    </div>
  `;

  Array.from(quizArea.querySelectorAll(".option-button")).forEach((button) => {
    button.addEventListener("click", () => {
      state.quiz.selectedOption = Number(button.dataset.index);
      renderQuiz();
    });
  });

  document.getElementById("check-answer").addEventListener("click", () => {
    if (state.quiz.selectedOption === null) {
      quizMeta.textContent = "Choose an answer before checking.";
      return;
    }

    state.quiz.answersChecked = true;
    const isCorrect = state.quiz.selectedOption === question.answer;
    if (isCorrect) {
      state.quiz.score += 1;
    }

    // NEW: persist mastery progress for the answered question's topic
    updateTopicStats(question.topicId || topic.id, isCorrect);
    state.progress.questionsAnswered += 1;
    saveProgress();
    refreshProgress();

    highlightAnswer(question.answer, state.quiz.selectedOption);
    showNextButton();
  });
}

function highlightAnswer(correctIndex, selectedIndex) {
  Array.from(quizArea.querySelectorAll(".option-button")).forEach((button) => {
    const index = Number(button.dataset.index);
    if (index === correctIndex) {
      button.classList.add("correct");
    } else if (index === selectedIndex) {
      button.classList.add("incorrect");
    }
    button.disabled = true;
  });
}

function showNextButton() {
  // NEW: keep next/finish behavior aligned with filtered question set
  const quizQuestions = getCurrentQuizQuestions();
  const controls = quizArea.querySelector(".quiz-controls");
  controls.innerHTML = `
    <button class="quiz-submit" type="button" id="next-question">
      ${state.quiz.currentIndex === quizQuestions.length - 1 ? "Finish quiz" : "Next question"}
    </button>
  `;

  quizArea.querySelector(".answer-rationale")?.remove();
  const rationale = document.createElement("div");
  rationale.className = "answer-rationale";
  rationale.textContent = quizQuestions[state.quiz.currentIndex].rationale;
  quizArea.querySelector(".question-block").appendChild(rationale);

  document.getElementById("next-question").addEventListener("click", () => {
    if (state.quiz.currentIndex === quizQuestions.length - 1) {
      const percent = Math.round((state.quiz.score / quizQuestions.length) * 100);
      state.progress.bestScore = Math.max(state.progress.bestScore, percent);
      saveProgress();
      refreshProgress();
      state.quiz.completed = true;
    } else {
      state.quiz.currentIndex += 1;
      state.quiz.selectedOption = null;
      state.quiz.answersChecked = false;
    }
    renderQuiz();
  });
}

function renderFlashcards() {
  const topic = getActiveTopic();
  const cards = getDailyFlashcards(topic);

  flashcardTitle.textContent = `${topic.name} flashcards`;
  flashcardCount.textContent = `${cards.length} daily cards`;

  if (!cards.length) {
    flashcardArea.innerHTML = `
      <p class="placeholder-text">
        Flashcards are available for built-in study tracks. Choose a track to review today's shuffled deck.
      </p>
    `;
    return;
  }

  if (state.flashcards.currentIndex >= cards.length) {
    state.flashcards.currentIndex = 0;
  }

  const currentCard = cards[state.flashcards.currentIndex];

  flashcardArea.innerHTML = `
    <div class="flashcard">
      <div>
        <p class="flashcard-label">${state.flashcards.showBack ? "Answer" : "Prompt"}</p>
        <p class="${state.flashcards.showBack ? "flashcard-back" : "flashcard-front"}">
          ${escapeHtml(state.flashcards.showBack ? currentCard.back : currentCard.front)}
        </p>
      </div>
      <div class="flashcard-controls">
        <button class="card-action" type="button" id="flip-card">
          ${state.flashcards.showBack ? "Show front" : "Flip card"}
        </button>
        <button class="card-action" type="button" id="next-card">
          ${state.flashcards.currentIndex === cards.length - 1 ? "Restart deck" : "Next card"}
        </button>
        <button class="card-action" type="button" id="master-card">Mark mastered</button>
      </div>
    </div>
  `;

  document.getElementById("flip-card").addEventListener("click", () => {
    state.flashcards.showBack = !state.flashcards.showBack;
    renderFlashcards();
  });

  document.getElementById("next-card").addEventListener("click", () => {
    if (state.flashcards.currentIndex === cards.length - 1) {
      state.flashcards.currentIndex = 0;
    } else {
      state.flashcards.currentIndex += 1;
    }
    state.flashcards.showBack = false;
    renderFlashcards();
  });

  document.getElementById("master-card").addEventListener("click", () => {
    state.progress.cardsMastered += 1;
    saveProgress();
    refreshProgress();
  });
}

function refreshProgress() {
  questionsAnsweredEl.textContent = state.progress.questionsAnswered;
  bestScoreEl.textContent = `${state.progress.bestScore}%`;
  cardsMasteredEl.textContent = state.progress.cardsMastered;
}

renderTopics();
renderQuiz();
renderFlashcards();
refreshProgress();
