const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");
const botao__reiniciar = document.querySelector(".botao__reiniciar");
const img_happy = document.querySelector(".img__happy");
const img_sad = document.querySelector(".img__sad");

import questions from "./questoes.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";
  img_happy.style.display = "none";
  img_sad.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  if (questionsCorrect >= 6){
    textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}. Parabéns, você conhece essa beldade.` ;
    content.style.display = "none";
    contentFinish.style.display = "flex";
    botao__reiniciar.style.display = "flex";
    img_happy.style.display = "flex";
    
  } else {
    textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}. Vamos conversar mais com a Damola, por favor.`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
    botao__reiniciar.style.display = "flex";
    img_sad.style.display = "flex";
  }
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();




//   // Função para atualizar o contador de dias
//   function atualizarContador() {
//       var currentDate = new Date();
//       var daysTogether = calcularDiferencaEmDias(startDate, currentDate);
//       document.getElementById("contador").textContent = "Já estamos de lovezinho há " + daysTogether + " dias!";
//   }

//   // Atualizar o contador de dias inicialmente
//   atualizarContador();

//   // Atualizar o contador de dias a cada segundo
//   setInterval(atualizarContador, 1000);
// });