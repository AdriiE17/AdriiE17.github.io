'use strict';

const main_slider = document.querySelector(".main-slider");
const slider = document.querySelector(".slider-container");
const slider_individual = document.querySelectorAll(".slider-content");
const forward = document.getElementById("forward");
const backward = document.getElementById("backward");
let counter = 1;
let width = slider_individual[0].clientWidth;
let responsive = window.matchMedia("(max-width:600px)");


// Slider
window.addEventListener("resize", e=>{
    width = slider_individual[0].clientWidth;
});

function nextSlide(direction){
    if(direction===1){
        slider.style.transform = "translate("+(-width*counter)+"px)";
        counter++;
    }else{
        slider.style.transform = "translate("+((-width*counter) + width)+"px)";
        counter--;
    }
    
    slider.style.transition = "transform 1s";
    if(counter === slider_individual.length){
        setTimeout(()=>{
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            counter=1;
        }, 1000);
    }else if(counter === 0){
        setTimeout(()=>{
            slider.style.transform = "translate("+ (-width*(slider_individual.length-1)) + "px)";
            slider.style.transition = "transform 0s";
            counter=slider_individual.length-1;
        }, 1000);
    }
}

setInterval(()=>{
    nextSlide(1);
}, 5000);

// For going forwards and backwards
forward.addEventListener("click", e=>{
    nextSlide(1);
});

backward.addEventListener("click", e=>{
    nextSlide(-1);
});


// For expanding content
function addEvents(container){
    container.addEventListener("mouseover", e=>{
        main_slider.style.transform = "scale(1.1)";
        forward.style.transform = "scale(1.1)";
        backward.style.transform = "scale(1.1)";
        forward.style.right = "110px";
        backward.style.left = "110px";
    });
    container.addEventListener("mouseleave", e=>{
        main_slider.style.transform = "scale(1)";
        forward.style.transform = "scale(1)";
        backward.style.transform = "scale(1)";
        forward.style.right = "150px";
        backward.style.left = "150px";
    });
}

if(responsive.matches != true){
    addEvents(main_slider);
    addEvents(forward);
    addEvents(backward);
}
