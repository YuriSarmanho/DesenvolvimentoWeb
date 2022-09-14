const db_questions = [
  {
    id: 1,
    question: "Quais dos itens a baixo é um laço de repetição?",
    answer_options: [
      {
        id: 1,
        answer: "===",
        isRigth: false,
      },
      {
        id: 2,
        answer: "!=",
        isRigth: false,
      },
      {
        id: 3,
        answer: "while()",
        isRigth: true,
      },
      {
        id: 4,
        answer: "if()",
        isRigth: false,
      },
    ],
  },
  {
    id: 2,
    question:
      "Que tipo de tag HTML é usada para colocar as principais informações do site?",
    answer_options: [
      {
        id: 1,
        answer: "<header>",
        isRigth: false,
      },
      {
        id: 2,
        answer: "<footer>",
        isRigth: false,
      },
      {
        id: 3,
        answer: "<p>",
        isRigth: false,
      },
      {
        id: 4,
        answer: "<body>",
        isRigth: true,
      },
    ],
  },
  {
    id: 3,
    question:
      "Qual das linguagem a baixo é utilizada para estilizar as páginas?",
    answer_options: [
      {
        id: 1,
        answer: "CSS",
        isRigth: true,
      },
      {
        id: 2,
        answer: "JSON",
        isRigth: false,
      },
      {
        id: 3,
        answer: "HTML",
        isRigth: true,
      },
      {
        id: 4,
        answer: "PHP",
        isRigth: false,
      },
    ],
  },
];
let currentQuestion = 0;

function setQuestion(currentQuestion) {
  // console.log(currentQuestion);
  document.getElementById("question").innerText =
    db_questions[currentQuestion].question;
  setAnswers(currentQuestion);
}

function setAnswers(currentQuestion) {
  for (let count = 0; count < 4; count++) {
    document.getElementById(count).innerText =
      db_questions[currentQuestion].answer_options[count].answer;
  }
}

function isRigthAnswer(questionId, answerId) {
  changeToResult();
  answerSelected = db_questions[questionId].answer_options[answerId].isRigth;
  if (answerSelected) {
    return console.log("Acertou miséra");
  } else {
    console.log("Errou miséra");
  }
  changeQuestion();
}

function changeQuestion() {
  currentQuestion = currentQuestion + 1;
  setQuestion(currentQuestion);
}

function isQuestionsEnded() {
  const totalQuestions = db_questions.length;

  if (currentQuestion == totalQuestions - 1) {
    return true;
  }
}

function changeToResult() {
  if (isQuestionsEnded()) {
    window.location = "result.html";
  }
}

function changeToGame() {
    window.location = "index.html";
}

setQuestion(currentQuestion);
