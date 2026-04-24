const state = {
  activeTopicId: studyTopics[0].id,
  // NEW: stores the user's topic keyword input
  selectedTopic: "",
  quiz: {
    currentIndex: 0,
    selectedOption: null,
const quizTitle = document.getElementById("quiz-title");
const quizTopicBadge = document.getElementById("quiz-topic-badge");
const quizMeta = document.getElementById("quiz-meta");
// NEW: topic input references
const topicInput = document.getElementById("topic-input");
const applyTopicButton = document.getElementById("apply-topic");
const quizArea = document.getElementById("quiz-area");
const flashcardTitle = document.getElementById("flashcard-title");
const flashcardCount = document.getElementById("flashcard-count");
  setActiveTopic(randomTopic.id);
});

// NEW: apply custom topic keyword without changing the existing layout
applyTopicButton.addEventListener("click", () => {
  state.selectedTopic = topicInput.value.trim().toLowerCase();
  resetQuiz();
  renderQuiz();
});

// NEW: allow Enter key on the topic input
topicInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    state.selectedTopic = topicInput.value.trim().toLowerCase();
    resetQuiz();
    renderQuiz();
  }
});

function loadProgress() {
  const fallback = { questionsAnswered: 0, bestScore: 0, cardsMastered: 0 };
  try {
  return studyTopics.find((topic) => topic.id === state.activeTopicId);
}

// NEW: flatten all questions and attach topic metadata for keyword matching
function getAllQuestions() {
  return studyTopics.flatMap((topic) =>
    topic.questions.map((question) => ({
      ...question,
      topicId: topic.id,
      topicName: topic.name,
      topicDescription: topic.description,
    }))
  );
}

// NEW: simple includes() matching with fallback to all questions
function getQuizQuestions() {
  const allQuestions = getAllQuestions();
  const keyword = state.selectedTopic.trim();

  if (!keyword) {
    return allQuestions;
  }

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

function setActiveTopic(topicId) {
  state.activeTopicId = topicId;
  resetQuiz();

function renderQuiz() {
  const topic = getActiveTopic();
  const question = topic.questions[state.quiz.currentIndex];
  // NEW: use keyword-filtered questions with fallback to all questions
  const quizQuestions = getQuizQuestions();
  const question = quizQuestions[state.quiz.currentIndex];

  quizTitle.textContent = `${topic.name} quiz`;
  quizTopicBadge.textContent = topic.name;
  quizMeta.textContent = `5-question practice set with quick rationales to help you remember why the right answer matters.`;
  quizTitle.textContent = state.selectedTopic ? `Custom topic quiz` : `${topic.name} quiz`;
  quizTopicBadge.textContent = state.selectedTopic || topic.name;
  quizMeta.textContent = state.selectedTopic
    ? `Showing questions matching "${state.selectedTopic}"${quizQuestions.length === getAllQuestions().length ? " with fallback to all questions." : "."}`
    : `5-question practice set with quick rationales to help you remember why the right answer matters.`;

  if (state.quiz.completed) {
    const percent = Math.round((state.quiz.score / topic.questions.length) * 100);
    const percent = Math.round((state.quiz.score / quizQuestions.length) * 100);
    quizArea.innerHTML = `
      <div class="quiz-result">
        <p>You finished the ${topic.name} set.</p>
        <p><strong>Score:</strong> ${state.quiz.score}/${topic.questions.length} (${percent}%)</p>
        <p>You finished the ${state.selectedTopic || topic.name} set.</p>
        <p><strong>Score:</strong> ${state.quiz.score}/${quizQuestions.length} (${percent}%)</p>
        <p>Review the flashcards next, then replay the quiz to improve your score.</p>
      </div>
      <div class="quiz-controls">

  quizArea.innerHTML = `
    <div class="question-block">
      <p class="question-progress">Question ${state.quiz.currentIndex + 1} of ${topic.questions.length}</p>
      <p class="question-progress">Question ${state.quiz.currentIndex + 1} of ${quizQuestions.length}</p>
      <p class="question-prompt">${question.prompt}</p>
      <div class="quiz-options">
        ${question.options
}

function showNextButton() {
  // NEW: keep next/finish behavior aligned with filtered question set
  const quizQuestions = getQuizQuestions();
  const controls = quizArea.querySelector(".quiz-controls");
  controls.innerHTML = `
    <button class="quiz-submit" type="button" id="next-question">
      ${state.quiz.currentIndex === getActiveTopic().questions.length - 1 ? "Finish quiz" : "Next question"}
      ${state.quiz.currentIndex === quizQuestions.length - 1 ? "Finish quiz" : "Next question"}
    </button>
  `;

  quizArea.querySelector(".answer-rationale")?.remove();
  const rationale = document.createElement("div");
  rationale.className = "answer-rationale";
  rationale.textContent = getActiveTopic().questions[state.quiz.currentIndex].rationale;
  rationale.textContent = quizQuestions[state.quiz.currentIndex].rationale;
  quizArea.querySelector(".question-block").appendChild(rationale);

  document.getElementById("next-question").addEventListener("click", () => {
    if (state.quiz.currentIndex === getActiveTopic().questions.length - 1) {
      const percent = Math.round((state.quiz.score / getActiveTopic().questions.length) * 100);
    if (state.quiz.currentIndex === quizQuestions.length - 1) {
      const percent = Math.round((state.quiz.score / quizQuestions.length) * 100);
      state.progress.bestScore = Math.max(state.progress.bestScore, percent);
      saveProgress();
      refreshProgress();
