// ============================================
//   AUSTRALIA PR JOURNEY GAME
//   TeeTalkEnglish
// ============================================

// ═══════════════════════════════════════
//  GAME DATA — 4 Stages, 3 Questions Each
// ═══════════════════════════════════════
const stages = [
  {
    id: 1,
    emoji: "🇻🇳",
    label: "STAGE 1 OF 4",
    title: "Before You Leave Vietnam",
    story: `Minh is in Vietnam. He has a job offer in Australia
            as a worker in a meat factory. Before he buys his
            plane ticket, he needs to make smart decisions.
            Help him choose correctly! 🌟`,
    questions: [
      {
        emoji: "📋",
        bubble: "The company sent me a job offer. Let me check the title carefully...",
        text: "What job title must Minh's contract say to have a clear path to PR?",
        options: [
          "Meat Processing Worker",
          "Butcher — ANZSCO 351211",
          "Factory Hand",
          "Food Production Worker"
        ],
        correct: 1,
        explanation: `✅ "Butcher" (ANZSCO 351211) is a Skill Level 3 trade.
                      It qualifies for employer sponsorship and the points test.
                      Other titles like "Meat Processing Worker" are unskilled
                      and have very limited PR pathways.`
      },
      {
        emoji: "🗣️",
        bubble: "I need to take an English test before I go. What score do I need?",
        text: "What minimum IELTS score should Minh aim for to get the most PR points?",
        options: [
          "IELTS 4.0 — Basic",
          "IELTS 5.0 — Minimum to get by",
          "IELTS 6.0 — Competent English",
          "IELTS 8.0 — Expert"
        ],
        correct: 2,
        explanation: `✅ IELTS 6.0 (Competent English) gives Minh 10 extra points
                      in the points test. IELTS 5.0 is the bare minimum but
                      gives fewer points. Aiming for 6.0 is the smart move!`
      },
      {
        emoji: "💰",
        bubble: "How much money should I save before flying to Australia?",
        text: "How much savings should Minh bring to Australia for his first weeks?",
        options: [
          "\$500 AUD — That's enough",
          "\$1,000 AUD — Just for food",
          "\$3,000–\$5,000 AUD — Safe amount",
          "No money needed — employer pays"
        ],
        correct: 2,
        explanation: `✅ Minh should save \$3,000–\$5,000 AUD before arrival.
                      This covers bond + rent, food, transport, SIM card,
                      and unexpected costs in the first 4–6 weeks before
                      his first paycheck arrives.`
      }
    ]
  },

  {
    id: 2,
    emoji: "✈️",
    label: "STAGE 2 OF 4",
    title: "Arrival in Australia",
    story: `Minh has landed in Australia! 🎉 He's excited but nervous.
            There are important decisions to make in his first months.
            One wrong move could slow down his PR journey.
            Help Minh stay on track! 💪`,
    questions: [
      {
        emoji: "📁",
        bubble: "My first payday! But what should I do with these papers?",
        text: "What must Minh do with his payslips and work documents?",
        options: [
          "Throw them away — not important",
          "Save every payslip, contract, and tax record carefully",
          "Give them to his employer to keep",
          "Only keep the last 3 months"
        ],
        correct: 1,
        explanation: `✅ Every payslip, tax return, and contract is EVIDENCE
                      for Minh's PR application. Immigration needs 2–3 years
                      of proof that he worked as a skilled butcher.
                      No documents = no PR! Keep everything!`
      },
      {
        emoji: "💸",
        bubble: "My supervisor said I'll get \$18/hour. Is that right?",
        text: "What is the correct minimum wage for a butcher in Australia?",
        options: [
          "\$18 per hour — sounds okay",
          "\$22 per hour — close enough",
          "Around \$25–\$28 per hour — Award Rate",
          "\$35 per hour — premium rate"
        ],
        correct: 2,
        explanation: `✅ The Award Rate (minimum legal wage) for butchers is
                      approximately \$25–\$28 per hour under the Meat Industry
                      Award. Minh should not accept less than this.
                      Being underpaid is wage theft — and it's illegal!`
      },
      {
        emoji: "🏙️",
        bubble: "My friend says I should move to Sydney for better life. Should I?",
        text: "Should Minh move to Sydney or stay in a regional area for PR?",
        options: [
          "Move to Sydney — bigger city, better life",
          "Move to Melbourne — more Vietnamese food",
          "Stay in regional area — more PR points + faster 491 visa",
          "It doesn't matter where he lives"
        ],
        correct: 2,
        explanation: `✅ Regional areas give Minh access to the Subclass 491 visa
                      + 5 to 10 extra points on the points test.
                      Most meat processing plants are already in regional areas
                      like Queensland, South Australia, and Western Australia.
                      Stay regional — it's a huge advantage!`
      }
    ]
  },

  {
    id: 3,
    emoji: "🏗️",
    label: "STAGE 3 OF 4",
    title: "Build Your Case for PR",
    story: `Minh has been in Australia for 1 year. He's working hard,
            saving documents, and improving his English.
            Now it's time to make the BIG moves toward PR.
            Which path should he choose? 🎯`,
    questions: [
      {
        emoji: "📝",
        bubble: "My boss likes my work. Should I ask about visa sponsorship now?",
        text: "When is the right time for Minh to ask his employer about 482 sponsorship?",
        options: [
          "After 1 week — show confidence early",
          "After 6–12 months — once you proved your value",
          "Never ask — wait for employer to offer",
          "After 5 years — be very patient"
        ],
        correct: 1,
        explanation: `✅ After 6–12 months is the right time. By then, Minh has
                      proven he's reliable, skilled, and worth sponsoring.
                      Asking too early seems presumptuous. Waiting too long
                      wastes time. Build the relationship first, then ask!`
      },
      {
        emoji: "🗺️",
        bubble: "I heard there are two main visa paths to PR. Which one is fastest?",
        text: "Which visa pathway gives Minh the fastest route to PR?",
        options: [
          "482 → 186 (Employer Nomination) — 3 to 4 years",
          "491 → 191 (Regional Sponsored) — 3 years",
          "Student visa → PR — 6 to 8 years",
          "Tourist visa → PR — not possible"
        ],
        correct: 1,
        explanation: `✅ The 491 → 191 pathway in a regional area is the fastest
                      at just 3 years — IF Minh meets the income threshold
                      (~\$53,900/year). The 482 → 186 path takes 3–4 years
                      but requires a supportive employer. Both are good options!`
      },
      {
        emoji: "🎯",
        bubble: "How many points do I need for the points-based visa?",
        text: "How many points does Minh need to be invited to apply for PR?",
        options: [
          "45 points — that's the base",
          "55 points — should be enough",
          "65 points — minimum to be competitive",
          "100 points — need to be perfect"
        ],
        correct: 2,
        explanation: `✅ 65 points is the minimum to submit an Expression of
                      Interest (EOI). But in reality, Minh should aim for
                      70+ points to get invited faster. Points come from
                      age, English, skilled work experience, and regional bonus.`
      }
    ]
  },

  {
    id: 4,
    emoji: "🏆",
    label: "STAGE 4 OF 4",
    title: "Lodge Your PR Application",
    story: `Minh has worked for 3 years in Australia! He's kept all
            his documents, improved his English, and built trust
            with his employer. Now it's time to apply for
            Permanent Residency! This is the final stage! 🇦🇺`,
    questions: [
      {
        emoji: "📋",
        bubble: "I want to apply for PR through my employer. Which visa is this?",
        text: "If Minh's employer sponsors him for PR directly, which visa does he apply for?",
        options: [
          "Subclass 189 — Independent Skilled",
          "Subclass 190 — State Nominated",
          "Subclass 186 — Employer Nomination Scheme",
          "Subclass 482 — Temporary Skill Shortage"
        ],
        correct: 2,
        explanation: `✅ Subclass 186 (Employer Nomination Scheme) is the PR visa
                      when an employer nominates you directly. Minh needs to
                      have worked for the same employer for at least 2–3 years
                      on a 482 visa before applying for the 186.`
      },
      {
        emoji: "💼",
        bubble: "I've been job-hopping every 6 months for better pay. Is that okay?",
        text: "Minh changed employers 4 times in 3 years. What is the problem?",
        options: [
          "No problem — more experience is better",
          "He earns more money — that's smart",
          "He loses employer sponsorship each time — resets his PR clock",
          "Immigration likes to see diverse experience"
        ],
        correct: 2,
        explanation: `✅ This is the BIGGEST mistake! The 482 → 186 pathway
                      requires Minh to work for the SAME employer for 2–3 years.
                      Every time he switches jobs, the clock resets completely.
                      Loyalty to one employer = the fastest path to PR!`
      },
      {
        emoji: "🎉",
        bubble: "I submitted everything. Health check done. Police check done. What happens now?",
        text: "Minh has submitted his PR application correctly. What is the expected outcome?",
        options: [
          "Rejected — it's very hard to get PR",
          "Must wait 10 years for decision",
          "PR Granted — Minh can stay in Australia forever!",
          "He needs to go back to Vietnam first"
        ],
        correct: 2,
        explanation: `✅ If Minh followed all the steps correctly:
                      ✔ Right job title (Butcher 351211)
                      ✔ Kept all documents
                      ✔ Stayed with same employer
                      ✔ Lived in regional area
                      ✔ Met income threshold
                      → His PR application will be APPROVED! 🎉🇦🇺`
      }
    ]
  }
];

// ═══════════════════════════════════════
//  GAME STATE
// ═══════════════════════════════════════
let currentStage     = 0;
let currentQuestion  = 0;
let hearts           = 3;
let stageCorrect     = 0;
let totalCorrect     = 0;
let answered         = false;

// ═══════════════════════════════════════
//  SCREEN MANAGEMENT
// ═══════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ═══════════════════════════════════════
//  START GAME
// ═══════════════════════════════════════
function startGame() {
  currentStage    = 0;
  currentQuestion = 0;
  hearts          = 3;
  stageCorrect    = 0;
  totalCorrect    = 0;
  showStageIntro();
}

// ═══════════════════════════════════════
//  SHOW STAGE INTRO
// ═══════════════════════════════════════
function showStageIntro() {
  const stage = stages[currentStage];

  document.getElementById("intro-emoji").textContent  = stage.emoji;
  document.getElementById("intro-label").textContent  = stage.label;
  document.getElementById("intro-title").textContent  = stage.title;
  document.getElementById("intro-story").textContent  = stage.story;

  showScreen("screen-stage-intro");
}

// ═══════════════════════════════════════
//  START STAGE QUESTIONS
// ═══════════════════════════════════════
function startStageQuestions() {
  currentQuestion = 0;
  stageCorrect    = 0;
  answered        = false;
  renderQuestion();
  showScreen("screen-question");
}

// ═══════════════════════════════════════
//  RENDER QUESTION
// ═══════════════════════════════════════
function renderQuestion() {
  const stage = stages[currentStage];
  const q     = stage.questions[currentQuestion];

  const totalQ    = stages.reduce((a, s) => a + s.questions.length, 0);
  const doneQ     = stages.slice(0, currentStage).reduce((a, s) => a + s.questions.length, 0)
                    + currentQuestion;
  const pct       = Math.round((doneQ / totalQ) * 100);

  // Top bar
  document.getElementById("q-stage-label").textContent = stage.label;
  updateHearts();

  // Progress
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-text").textContent =
    `Question ${doneQ + 1} of ${totalQ}`;

  // Character bubble
  document.getElementById("char-bubble").textContent = q.bubble;

  // Question
  document.getElementById("q-emoji").textContent = q.emoji;
  document.getElementById("q-text").textContent  = q.text;

  // Options
  const letters = ["A", "B", "C", "D"];
  const grid    = document.getElementById("options-grid");
  grid.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `
      <span class="opt-letter">${letters[i]}</span>
      <span>${opt}</span>
    `;
    btn.onclick = () => selectAnswer(i);
    grid.appendChild(btn);
  });

  // Hide feedback
  const fb = document.getElementById("feedback-box");
  fb.className = "feedback-box hidden";
  answered = false;
}

// ═══════════════════════════════════════
//  SELECT ANSWER
// ═══════════════════════════════════════
function selectAnswer(index) {
  if (answered) return;
  answered = true;

  const q       = stages[currentStage].questions[currentQuestion];
  const isRight = index === q.correct;
  const btns    = document.querySelectorAll(".option-btn");

  // Disable all buttons
  btns.forEach(b => b.disabled = true);

  // Highlight correct and wrong
  btns[q.correct].classList.add("correct");
  if (!isRight) {
    btns[index].classList.add("wrong");
    loseHeart();
  } else {
    stageCorrect++;
    totalCorrect++;
  }

  // Show feedback
  showFeedback(isRight, q.explanation);
}

// ═══════════════════════════════════════
//  SHOW FEEDBACK
// ═══════════════════════════════════════
function showFeedback(isCorrect, explanation) {
  const fb = document.getElementById("feedback-box");

  document.getElementById("feedback-icon").textContent =
    isCorrect ? "✅" : "❌";

  document.getElementById("feedback-title").textContent =
    isCorrect ? "Great job, Minh!" : "Not quite!";

  document.getElementById("feedback-explain").textContent = explanation;

  fb.className = `feedback-box ${isCorrect ? "correct-fb" : "wrong-fb"}`;

  if (hearts <= 0) {
    document.getElementById("btn-next").textContent = "See What Happened →";
  } else {
    document.getElementById("btn-next").textContent = "Next →";
  }
}

// ═══════════════════════════════════════
//  NEXT QUESTION
// ═══════════════════════════════════════
function nextQuestion() {
  if (hearts <= 0) {
    showGameOver();
    return;
  }

  const stage = stages[currentStage];
  currentQuestion++;

  if (currentQuestion >= stage.questions.length) {
    showStageComplete();
  } else {
    renderQuestion();
  }
}

// ═══════════════════════════════════════
//  LOSE HEART
// ═══════════════════════════════════════
function loseHeart() {
  hearts--;
  updateHearts();
}

function updateHearts() {
  const display = document.getElementById("hearts-display");
  if (!display) return;
  let h = "";
  for (let i = 0; i < 3; i++) {
    h += i < hearts ? "❤️" : "🖤";
  }
  display.textContent = h;
}

// ═══════════════════════════════════════
//  STAGE COMPLETE
// ═══════════════════════════════════════
function showStageComplete() {
  const stage    = stages[currentStage];
  const total    = stage.questions.length;
  const pct      = Math.round((stageCorrect / total) * 100);

  const stars =
    pct === 100 ? "⭐⭐⭐" :
    pct >= 66   ? "⭐⭐" : "⭐";

  const msgs = [
    "Minh is ready to fly to Australia! ✈️",
    "Minh is settling in well! 💪",
    "Minh is building a strong case for PR! 📁",
    "Minh is so close to PR! 🏆"
  ];

  document.getElementById("complete-stars").textContent  = stars;
  document.getElementById("complete-title").textContent  = `Stage ${stage.id} Complete!`;
  document.getElementById("complete-msg").textContent    = msgs[currentStage] || "Great work!";
  document.getElementById("score-correct").textContent   = stageCorrect;
  document.getElementById("score-total").textContent     = total;
  document.getElementById("score-hearts").textContent    = hearts;

  const btnContinue = document.getElementById("btn-continue");
  if (currentStage >= stages.length - 1) {
    btnContinue.textContent = "🎉 Get PR Result!";
  } else {
    btnContinue.textContent = `Continue to Stage ${stage.id + 1} →`;
  }

  showScreen("screen-stage-complete");
}

// ═══════════════════════════════════════
//  NEXT STAGE
// ═══════════════════════════════════════
function nextStage() {
  currentStage++;

  if (currentStage >= stages.length) {
    showWin();
  } else {
    hearts = Math.min(hearts + 1, 3); // Restore 1 heart between stages
    showStageIntro();
  }
}

// ═══════════════════════════════════════
//  GAME OVER
// ═══════════════════════════════════════
function showGameOver() {
  const msgs = [
    "Minh accepted the wrong job title! Without ANZSCO 351211, there is no PR path. 😢",
    "Minh lost his documents! Without payslips and contracts, he cannot prove he worked here. 😢",
    "Minh made too many wrong decisions! PR requires careful, smart planning. 😢",
    "Minh is so close! One more mistake cost him everything. Review and try again! 😢"
  ];

  document.getElementById("gameover-msg").textContent =
    msgs[currentStage] || "Minh made too many mistakes. Try again!";

  showScreen("screen-gameover");
}

// ═══════════════════════════════════════
//  RETRY STAGE
// ═══════════════════════════════════════
function retryStage() {
  hearts       = 3;
  stageCorrect = 0;
  startStageQuestions();
}

// ═══════════════════════════════════════
//  WIN SCREEN
// ═══════════════════════════════════════
function showWin() {
  const pct = Math.round((totalCorrect / 12) * 100);

  document.getElementById("win-score-final").textContent =
    `🏆 Final Score: ${totalCorrect}/12 correct (${pct}%)`;

  showScreen("screen-win");
  spawnConfetti();
}

// ═══════════════════════════════════════
//  CONFETTI
// ═══════════════════════════════════════
function spawnConfetti() {
  const area   = document.getElementById("confetti-area");
  const colors = ["#e05c2b","#f5c518","#27ae60","#2980b9","#e74c3c","#9b59b6"];

  for (let i = 0; i < 30; i++) {
    const dot       = document.createElement("div");
    dot.className   = "confetti-dot";
    dot.style.left  = Math.random() * 100 + "%";
    dot.style.top   = "-10px";
    dot.style.background = colors[Math.floor(Math.random() * colors.length)];
    dot.style.animationDuration  = (2 + Math.random() * 3) + "s";
    dot.style.animationDelay     = (Math.random() * 2) + "s";
    area.appendChild(dot);
  }
}

// ═══════════════════════════════════════
//  RESTART
// ═══════════════════════════════════════
function restartGame() {
  document.getElementById("confetti-area").innerHTML = "";
  startGame();
}

// ═══════════════════════════════════════
//  INIT
// ═══════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  showScreen("screen-start");
  console.log("✅ PR Journey Game loaded!");
});