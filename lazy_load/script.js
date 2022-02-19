"use strict";

// Lazy load
let list_names = [
    "Shiniking", "Bananabee", "Sparrowbar", "Nannymilk", "Marrowscout",
    "Ethernalflame", "ParsnipjamLady", "DivineGolden", "HoodAaronn", "MessiChikito"
];

let loadNewPublications = entries => {
    if (entries[0].isIntersecting) {
        for (let i = 0; i <= 9; i++) {
            const section = document.getElementById("comments");
            const dc = document.createDocumentFragment();
            const comment = document.createElement("div");
            const profile = document.createElement("div");
            const body = document.createElement("div");
            const profile_photo = document.createElement("img");
            const profile_user = document.createElement("p");
            const profile_usertag = document.createElement("p");
            const text = document.createElement("p");

            comment.setAttribute("class", "comment");
            profile.setAttribute("class", "profile");
            body.setAttribute("class", "body");
            profile_photo.setAttribute("class", "profile_photo");
            profile_user.setAttribute("class", "profile_user");
            profile_usertag.setAttribute("class", "profile_usertag");
            text.setAttribute("class", "text");

            comment.style.textShadow = "2px 2px 4px rgb(" + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) + ")";
            profile_photo.setAttribute("src", "https://adriie17.github.io/lazy_load/img/" + i + ".jpg");
            profile_user.textContent = list_names[i];
            profile_usertag.textContent = "@" + list_names[i].toLowerCase();
            text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt accusamus est vitae fugiat! Ut eum reiciendis ab molestias iste! Ad, ducimus. Veniam quia officiis eius totam tenetur eveniet quasi?<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt accusamus est vitae fugiat! Ut eum reiciendis ab molestias iste! Ad, ducimus. Veniam quia officiis eius totam tenetur eveniet quasi?<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt accusamus est vitae fugiat! Ut eum reiciendis ab molestias iste! Ad, ducimus. Veniam quia officiis eius totam tenetur eveniet quasi?<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt accusamus est vitae fugiat! Ut eum reiciendis ab molestias iste! Ad, ducimus. Veniam quia officiis eius totam tenetur eveniet quasi?"

            profile.appendChild(profile_photo);
            profile.appendChild(profile_user);
            profile.appendChild(profile_usertag);
            body.appendChild(text);
            comment.appendChild(profile);
            comment.appendChild(body);
            dc.appendChild(comment);
            section.appendChild(dc);
        }
    }
}

let executeWithTime = entries => setTimeout(function() {loadNewPublications(entries)}, 1500);

const observer = new IntersectionObserver(executeWithTime);
observer.observe(document.getElementById("loader_container"));


// Title change function
const title = document.title

document.addEventListener('visibilitychange', function changeTitle() {
	if (document.visibilityState === 'hidden') {
		document.title = "Que te vas? Veni pa' aca"
	}
	
	if(document.visibilityState === 'visible'){
		document.title = title
	}
});