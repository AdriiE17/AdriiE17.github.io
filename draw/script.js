'use strict';

const canvas = document.getElementById('canvas');
const dif = canvas.getBoundingClientRect();
const ctx = canvas.getContext('2d');

let painting, color, linewidth;

canvas.addEventListener('mousedown', e => {
    painting = true;
    color = document.getElementById('color').value;
    linewidth = document.getElementById('lw').value;
    ctx.beginPath();
});

canvas.addEventListener('mousemove', e => {
    if(painting){
        ctx.strokeStyle = color;
        ctx.lineWidth = linewidth;
        ctx.lineTo(e.clientX-dif.left, e.clientY-dif.top);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', e => {
    ctx.closePath();
    painting = false;
});