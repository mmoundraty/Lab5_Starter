// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

    const voice_selector = document.getElementById("voice-select");
    const synth = window.speechSynthesis;
    selector_add(voice_selector,synth)
    const button = document.querySelector("button");
    button.addEventListener("click",()=>play_sound(voice_selector,synth))


}

function selector_add(voice_selector,synth){

    const voice = synth.getVoices();
    voice.forEach(voice=>{
        let option = document.createElement("option");
        option.textContent = voice.name+voice.lang;
        voice_selector.appendChild(option)
    })


}

function play_sound(voice_selector,synth){
    const text_area = document.querySelector("#text-to-speak");
    const img = document.querySelector("img");
    const voices = window.speechSynthesis.getVoices();
    const voice_now = voices.find(voice=>voice.name+voice.lang===voice_selector.value);
    const speaker = new SpeechSynthesisUtterance(text_area.value);
    speaker.voice = voice_now;
    speaker.onend = ()=>{
        img.src = "assets/images/smiling.png";
    }
    synth.speak(speaker);
    img.src = "assets/images/smiling-open.png";

}

