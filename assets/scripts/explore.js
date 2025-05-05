// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const button = document.querySelector('button');
  const sound = document.querySelector('audio');
  const options = document.getElementById("voice-select");
  const img = document.querySelector('img');
  button.addEventListener("click", function() {
    img.src = "assets/images/smiling-open.png";
  });
}

