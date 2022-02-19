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

    if(counter === sliderIndividual.length + 1){
        slider.style.transform = "translate(0px)";
        counter=1;
    }

}, 5000);