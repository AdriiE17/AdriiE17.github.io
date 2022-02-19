"use strict";

let executing = false;
const span = document.getElementById("span");
const sonido = document.createElement("audio");
sonido.setAttribute("src","teclas.mp3");
document.body.appendChild(sonido);

window.addEventListener("click", ()=>{
    if(!executing){
        executing = true;
        sonido.load();
        sonido.play();
        span.innerHTML = "Hello Workd!";
        span.style.width = "12ch";
        span.style.animation = "typing 2s steps(12) infinite alternate";
        
        setTimeout(()=>{
            sonido.pause();
            span.style.animation = "blink .5s infinite step-end alternate";
        }, 2000)
    
        setTimeout(()=>{
            sonido.play();
            span.style.animation = "delete 1s steps(4) 2 alternate";
        }, 3000)
    
        setTimeout(()=>{
            span.innerHTML = "Hello World!";
        }, 4000)
    
        setTimeout(()=>{
            sonido.pause();
            span.style.animation = "blink .5s infinite step-end alternate";
            executing = false;
        }, 5000)
    }
})