// ================= SCREEN REFERENCES =================
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

// ================= BUTTON REFERENCES =================
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

// ================= QUESTION REFERENCES =================
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

// ================= RESULT REFERENCES =================
const resultPercent = document.getElementById("result");
const message = document.getElementById("message");

// ================= GLOBAL STATE =================
let currentIndex = 0;
let selectedAnswer = null;
let totalPoints = 0;
let totalMax = 0;
let userAnswers = [];

// ================= SCREEN HELPERS =================
function hideAllScreens() {
  welcomeScreen.style.display = "none";
  quizScreen.style.display = "none";
  resultScreen.style.display = "none";
}

function showWelcomeScreen() {
  hideAllScreens();
  welcomeScreen.style.display = "flex";
}

function showQuizScreen() {
  hideAllScreens();
  quizScreen.style.display = "flex";
}

function showResultScreen() {
  hideAllScreens();
  resultScreen.style.display = "flex";
}

// ================= LOAD QUESTION =================
function loadQuestion(i) {
  const q = questions[i];

  selectedAnswer = null;
  nextBtn.disabled = true;

  questionNumber.textContent = i + 1;
  questionText.textContent = q.text;
  optionsContainer.innerHTML = "";

  // -------- SINGLE CHOICE --------
  if (q.type === "single-choice") {
    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.classList.add("option-btn");

      btn.addEventListener("click", () => {
        document.querySelectorAll(".option-btn").forEach((b) =>
          b.classList.remove("selected")
        );

        btn.classList.add("selected");
        selectedAnswer = opt;
        nextBtn.disabled = false;
      });

      optionsContainer.appendChild(btn);
    });
  }

  // -------- BOOLEAN --------
  if (q.type === "boolean") {
    const yesBtn = document.createElement("button");
    const noBtn = document.createElement("button");

    yesBtn.textContent = "Yes";
    noBtn.textContent = "No";

    yesBtn.classList.add("option-btn");
    noBtn.classList.add("option-btn");

    yesBtn.addEventListener("click", () => {
      document.querySelectorAll(".option-btn").forEach((b) =>
        b.classList.remove("selected")
      );
      yesBtn.classList.add("selected");
      selectedAnswer = true;
      nextBtn.disabled = false;
    });

    noBtn.addEventListener("click", () => {
      document.querySelectorAll(".option-btn").forEach((b) =>
        b.classList.remove("selected")
      );
      noBtn.classList.add("selected");
      selectedAnswer = false;
      nextBtn.disabled = false;
    });

    optionsContainer.appendChild(yesBtn);
    optionsContainer.appendChild(noBtn);
  }
}

// ================= SCORING =================
function computePoints(q, answer) {
  return q.scoring[answer] ?? 0;
}

// ================= NEXT QUESTION =================
function goToNextQuestion() {
  if (selectedAnswer === null) return;

  const q = questions[currentIndex];
  const points = computePoints(q, selectedAnswer);

  totalPoints += points;
  totalMax += q.maxPoints;

  userAnswers.push({
    id: q.id,
    answer: selectedAnswer,
    points,
  });

  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion(currentIndex);
  } else {
    const percent = Math.round((totalPoints / totalMax) * 100);
    resultPercent.textContent = percent + "%";
    message.textContent =
      percent >= 80
        ? "Mā shā' Allāh! May Allah accept your deeds and keep you consistent."
        : percent >=60
        ? "Alhamdulillah, brother! You're doing well—keep improving your ibādah."
        : percent >= 50
        ? "You're progressing—consistency will take you further, in shā' Allāh."
        : percent >=45
        ? "Brother, you're already regular with your salah—now try to deepen your commitment to the deen."
        : "It's never too late to return. May Allah grant you hidāyah.";

    showResultScreen();
  }
}

// ================= INIT APP =================
function initApp() {
  startBtn.addEventListener("click", () => {
    currentIndex = 0;
    totalPoints = 0;
    totalMax = 0;
    userAnswers = [];

    showQuizScreen();
    loadQuestion(0);
  });

  nextBtn.addEventListener("click", goToNextQuestion);

  restartBtn.addEventListener("click", () => {
    showWelcomeScreen();
  });

  showWelcomeScreen();
}

initApp();

