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
  // NEW: lightweight Duolingo-style mastery tracking profile
  learningProfile: loadLearningProfile(),
};

const topicGrid = document.getElementById("topic-grid");
const quizTitle = document.getElementById("quiz-title");
const quizTopicBadge = document.getElementById("quiz-topic-badge");
const quizMeta = document.getElementById("quiz-meta");
// NEW: topic input references
const topicInput = document.getElementById("topic-input");
const applyTopicButton = document.getElementById("apply-topic");
const quizArea = document.getElementById("quiz-area");
const flashcardTitle = document.getElementById("flashcard-title");
const flashcardCount = document.getElementById("flashcard-count");
const flashcardArea = document.getElementById("flashcard-area");
const questionsAnsweredEl = document.getElementById("questions-answered");
const bestScoreEl = document.getElementById("best-score");
const cardsMasteredEl = document.getElementById("cards-mastered");

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
  const randomTopic = studyTopics[Math.floor(Math.random() * studyTopics.length)];
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

    tile.innerHTML = `
      <p class="topic-tag">${topic.questions.length} quiz questions</p>
      <h3>${topic.name}</h3>
      <p class="topic-meta">${topic.description}</p>
      <button class="topic-button" type="button">Study ${topic.name}</button>
    `;

    tile.querySelector("button").addEventListener("click", () => setActiveTopic(topic.id));
    topicGrid.appendChild(tile);
  });
}

function renderQuiz() {
  const topic = getActiveTopic();
  // NEW: use keyword-filtered questions with fallback to all questions
  const quizQuestions = getQuizQuestions();
  const question = quizQuestions[state.quiz.currentIndex];

  quizTitle.textContent = state.selectedTopic ? `Custom topic quiz` : `${topic.name} quiz`;
  quizTopicBadge.textContent = state.selectedTopic || topic.name;
  quizMeta.textContent = state.selectedTopic
    ? `Showing questions matching "${state.selectedTopic}"${quizQuestions.length === getAllQuestions().length ? " with fallback to all questions." : "."}`
    : `5-question practice set with quick rationales to help you remember why the right answer matters.`;

  if (state.quiz.completed) {
    const percent = Math.round((state.quiz.score / quizQuestions.length) * 100);
    quizArea.innerHTML = `
      <div class="quiz-result">
        <p>You finished the ${state.selectedTopic || topic.name} set.</p>
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
      <p class="question-prompt">${question.prompt}</p>
      <div class="quiz-options">
        ${question.options
          .map(
            (option, index) => `
            <button class="option-button${state.quiz.selectedOption === index ? " selected" : ""}" data-index="${index}" type="button">
              ${option}
            </button>
          `
          )
          .join("")}
      </div>
      <div class="quiz-controls">
        <button class="quiz-submit" type="button" id="check-answer">Check answer</button>
      </div>
      ${state.quiz.answersChecked ? `<div class="answer-rationale">${question.rationale}</div>` : ""}
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
  const quizQuestions = getQuizQuestions();
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
  const currentCard = topic.flashcards[state.flashcards.currentIndex];

  flashcardTitle.textContent = `${topic.name} flashcards`;
  flashcardCount.textContent = `${topic.flashcards.length} cards`;

  flashcardArea.innerHTML = `
    <div class="flashcard">
      <div>
        <p class="flashcard-label">${state.flashcards.showBack ? "Answer" : "Prompt"}</p>
        <p class="${state.flashcards.showBack ? "flashcard-back" : "flashcard-front"}">
          ${state.flashcards.showBack ? currentCard.back : currentCard.front}
        </p>
      </div>
      <div class="flashcard-controls">
        <button class="card-action" type="button" id="flip-card">
          ${state.flashcards.showBack ? "Show front" : "Flip card"}
        </button>
        <button class="card-action" type="button" id="next-card">
          ${state.flashcards.currentIndex === topic.flashcards.length - 1 ? "Restart deck" : "Next card"}
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
    if (state.flashcards.currentIndex === topic.flashcards.length - 1) {
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
