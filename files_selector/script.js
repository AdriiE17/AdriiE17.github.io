'use strict';

// Some necessary variables
const main_title = document.getElementById('main_title')
const breset = document.getElementById('breset')
const input = document.getElementById('input');
const fake_input = document.getElementById('fake_input')
const section = document.getElementById('section');
const fragment = new DocumentFragment();

// For reading the files
let readFile = (ar) =>{
    for (let i = 0; i < ar.length; i++) {
        const r = new FileReader();
        r.readAsText(ar[i]);

        r.addEventListener('progress', e=>{
            document.getElementById('text').textContent = "";
            document.getElementById('load_bar').style.width = Math.round(e.loaded / ar[i].size * 100) + "%";
            document.getElementById('load_bar').textContent = Math.round(e.loaded / ar[i].size * 100) + "%";
        });

        r.addEventListener('load', (e)=>{
            document.getElementById('load_bar').textContent = "";
            document.getElementById('text').textContent = 'Select or drag and drop a file...';
            document.getElementById('load_bar').style.width = '0%';
            const title = document.createElement('h3');
            const p = document.createElement('p');
            title.textContent = ar[i].name;
            p.textContent = e.currentTarget.result;
            fragment.appendChild(title);
            fragment.appendChild(p);
            if(i == ar.length-1) section.appendChild(fragment);
        });
    }
};

// When the user chooses a file this event is called
input.addEventListener('change', (e)=>{
    readFile(input.files);
});

// When the user drags and drops a file this events are called
fake_input.addEventListener("dragover", (e)=>{
    e.preventDefault();
});

fake_input.addEventListener("drop", (e)=>{
    e.preventDefault();
    readFile(e.dataTransfer.files);
});


// This is for deleting all the current files
breset.addEventListener('click', (e)=>{
    while (section.firstChild){
        section.removeChild(section.firstChild);
    };
    section.appendChild(main_title);
});


// This is for scroll bar configuration
window.onscroll = () => scroll();
function scroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress_bar").style.width = scrolled + "%";
}