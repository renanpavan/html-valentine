var audio = document.getElementById("myAudio");
var playing = false;

document.getElementById("playPauseButton").addEventListener("click", function() {
  if (!playing) {
    audio.play();
    playing = true;
  } else {
    audio.pause();
    playing = false;
  }
});

document.addEventListener("DOMContentLoaded", function() {
  // Data do início do relacionamento (substitua com a data real)
  var startDate = new Date("2020-03-27"); // Substitua YYYY-MM-DD pela data de início

  // Função para calcular a diferença entre as datas em dias
  function calcularDiferencaEmDias(data1, data2) {
      var diffEmMilliseconds = Math.abs(data2 - data1);
      return Math.ceil(diffEmMilliseconds / (1000 * 60 * 60 * 24));
  }

  // Função para atualizar o contador de dias
  function atualizarContador() {
      var currentDate = new Date();
      var daysTogether = calcularDiferencaEmDias(startDate, currentDate);
      document.getElementById("contador").textContent = "Já estamos de lovezinho há " + daysTogether + " dias!";
  }

  // Atualizar o contador de dias inicialmente
  atualizarContador();

  // Atualizar o contador de dias a cada segundo
  setInterval(atualizarContador, 1000);
});