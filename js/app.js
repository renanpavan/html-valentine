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