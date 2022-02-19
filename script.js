'use strict';

let slider = document.querySelector(".slider-container");
let sliderIndividual = document.querySelectorAll(".slider-content");
let counter = 1;
let width = sliderIndividual[0].clientWidth;


window.addEventListener("resize", e=>{
    width = sliderIndividual[0].clientWidth;
})

setInterval(()=>{
    slider.style.transform = "translate("+(-width*counter)+"px)";
    slider.style.transition = "transform 1s";
    counter++;
    
    if(counter === sliderIndividual.length){
        setTimeout(()=>{
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            counter=1;
        }, 2500);
    }

}, 5000);
