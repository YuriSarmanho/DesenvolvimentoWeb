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
  }
];


const quest = db_questions[0].question
const resp1 = db_questions[0].answer_options[0].answer
const resp2 = db_questions[0].answer_options[1].answer
const resp3= db_questions[0].answer_options[2].answer
const resp4 = db_questions[0].answer_options[3].answer

document.getElementById("question").innerText = quest
document.getElementById("option1").innerText = resp1
document.getElementById("option2").innerText = resp2
document.getElementById("option3").innerText = resp3
document.getElementById("option4").innerText = resp4
