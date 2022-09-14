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
      }
    ]
  },{
    id: 2,
    question: "Que tipo de tag HTML é usada para colocar as principais informações do site?",
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
      }
    ]
  },{
    id: 3,
    question: "Qual das linguagem a baixo é utilizada para estilizar as páginas?",
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
      }
    ]
  }
];


const quest = db_questions[2].question
const resp1 = db_questions[2].answer_options[0].answer
const resp2 = db_questions[2].answer_options[1].answer
const resp3= db_questions[2].answer_options[2].answer
const resp4 = db_questions[2].answer_options[3].answer

document.getElementById("question").innerText = quest
document.getElementById("option1").innerText = resp1
document.getElementById("option2").innerText = resp2
document.getElementById("option3").innerText = resp3
document.getElementById("option4").innerText = resp4



function isRigthAnswer(questionId, answerId) {
  answerSelected = db_questions[questionId].answer_options[answerId].isRigth
  if(answerSelected){
    return console.log("Acertou miséra")
  }
  console.log("Errou miséra")
}