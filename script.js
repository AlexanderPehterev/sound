const sounds = document.querySelectorAll("audio");
const pads = document.querySelectorAll(".sound-pads>div");
const animationZone = document.querySelector(".animation-div");

const color = [
"rgb(255, 98, 1)",
"rgb(16, 0, 96)",
"aliceblue",
"rgb(0, 90, 105)",
"rgb(0,0,0)"
]

function bubbleanimation(item) {
    const bubble = document.createElement("div");

    animationZone.appendChild(bubble);
    
    bubble.style.backgroundColor = color[item];
    
    bubble.style.animation = "bubbleFly 10s";
    
    bubble.addEventListener("animationend", function () { animationZone.removeChild(bubble) });
    }

function playSound(item) {
    return function ( ) {
        if (sounds[item].loop) {
            sounds[item].pause()
            sounds[item].loop = false;
        } else {
            sounds[item].currentTime = 0;
            sounds[item].volume = 0.1;
            sounds[item].play();
            sounds[item].loop = true ;
            bubbleanimation(item)
        }
    }
}



for (let i = 0; i < pads.length; i += 1) {
   pads[i].addEventListener("click", playSound(i))
}


