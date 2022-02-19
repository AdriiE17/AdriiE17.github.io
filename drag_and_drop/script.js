"use strict";

const contenedorCirculo = document.getElementById("contenedor-circulo");
contenedorCirculo.addEventListener("dragover", (e)=>{
    e.preventDefault();
});

for(let i = 1; i<document.getElementById("contenedor-circulos").children.length+1; i++){
    document.querySelector(`.circulo${i}`).addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("circulo", `circulo${i}`);
    });
}

let addColor = (e, circulo, color)=>{
    if(e.dataTransfer.getData("circulo")==circulo) contenedorCirculo.style.backgroundColor = color;
}

contenedorCirculo.addEventListener("drop", (e)=>{
    addColor(e, "circulo1", "#ff0000");
    addColor(e, "circulo2", "#ff0");
    addColor(e, "circulo3", "#B2FFFF");
});

contenedorCirculo.addEventListener("click", ()=>{
    contenedorCirculo.style.backgroundColor = "#9C9C9C"
})