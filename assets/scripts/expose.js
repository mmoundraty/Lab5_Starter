// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
    const voice_type = document.getElementById("horn-select");
    voice_type.addEventListener("change",()=>selector_picture(voice_type));

    const jsConfetti = new JSConfetti()
    const play_button = document.querySelector("button");
    play_button.addEventListener("click",()=>play_sound(voice_type,jsConfetti))


    const voice_input=document.querySelector("[type='range']")
    voice_input.addEventListener("change",()=>change_volume(voice_input))



}

function selector_picture (voice_type){
    const picture = document.querySelector("[alt='No image selected']")
    const option = voice_type.selectedIndex;
    console.log(option)
    if(option===1){
        picture.src = "assets/images/air-horn.svg";
    }
    else if(option===2){
        picture.src = "assets/images/car-horn.svg";
    }
    else if(option===3){
        picture.src = "assets/images/party-horn.svg";
    }
}
function play_sound(voice_type,jsConfetti){
    const audio = document.querySelector("audio");
    audio.src = "assets/audio/"+voice_type.value+".mp3";
    audio.play();
    if(voice_type.value==='party-horn'){

        jsConfetti.addConfetti();
        jsConfetti.clearCanvas();
    }

}

function change_volume(voice_input){
    const audio = document.querySelector("audio");
    audio.volume = voice_input.value/100;
    let volume = audio.volume;
    const icon = document.querySelectorAll("img")[1]
    if(volume===0){
        icon.src = "assets/icons/volume-level-0.svg";
        icon.alt = "Volume 0";
    }
    else if(volume<0.33 && volume>0){
        icon.src = "assets/icons/volume-level-1.svg";
        icon.alt = "Volume 1";
    }
    else if(volume>0.32 && volume<0.67){
        icon.src = "assets/icons/volume-level-2.svg";
        icon.alt = "Volume 2";
    }
    else{
        icon.src = "assets/icons/volume-level-3.svg";
        icon.alt = "Volume 3";
    }
}