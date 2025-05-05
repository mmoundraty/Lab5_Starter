// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // Get the button and the text input elements
  const options = document.getElementById('horn-select');
  const img = document.querySelector('img');
  const sound = document.querySelector('audio');
  const button = document.querySelector('button');
  const volume = document.getElementById('volume');
  const volumeImage = document.querySelector('img[alt="Volume level 2"]');
  const jsConfetti = new JSConfetti()
  options.addEventListener("change", function() {
    if(options.selectedIndex == 1) {
      img.src = "assets/images/air-horn.svg";
      sound.src = "assets/audio/air-horn.mp3";
    }
    else if(options.selectedIndex == 2) {
      img.src = "assets/images/car-horn.svg";
      sound.src = "assets/audio/car-horn.mp3";
    }
    else if(options.selectedIndex == 3) {
      img.src = "assets/images/party-horn.svg";
      sound.src = "assets/audio/party-horn.mp3";
      button.addEventListener("click", function() {
        jsConfetti.addConfetti()  
      });
    }
    else {
      img.src = "assets/images/no-image.png";
    }
  });

  button.addEventListener("click", function() {
    sound.volume = volume.value/100;
    sound.play();
  });

  volume.addEventListener("change", function() {
    sound.volume = volume.value/100;
    if(sound.volume == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    }
    else if(sound.volume < 0.33 && sound.volume > 0) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    }
    else if(sound.volume < 0.67 && sound.volume >= 0.33) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
  });


}