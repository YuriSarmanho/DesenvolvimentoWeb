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

const quest = db_questions[0].question;

document.getElementById("question").innerText = quest;

function setAnswers() {
  for(let count = 0; count<4;count++){
    document.getElementById(count).innerText = db_questions[0].answer_options[count].answer;
  }
}

function isRigthAnswer(questionId, answerId) {
  answerSelected = db_questions[questionId].answer_options[answerId].isRigth;
  if (answerSelected) {
    return console.log("Acertou miséra");
  }
  console.log("Errou miséra");
}

setAnswers()