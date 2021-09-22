const img = document.getElementById("person_img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prev_btn = document.querySelector(".prev_btn");
const next_btn = document.querySelector(".next_btn");

let currentItem = 0;

const reviews = [ 
    {
        id: 0,
        img: "./img/reviewer-1.jpeg",
        name: "James Smith",
        job: "UX DESIGNER",
        info: "I'm a profesional UX designer. I'm willing to business with you. I difinitely will make profits.",
    },

    {
        id: 1,
        img: "./img/reviewer-2.jpeg",
        name: "Micheal Johnson",
        job: "System Enginner",
        info: "I'm a professional system engineer. I can assist you."
    },


]

window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
});

next_btn.addEventListener("click", function() {
    currentItem++;
    if (currentItem >= reviews.length) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prev_btn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0 ) {
        currentItem = reviews.length;
    }
    showPerson(currentItem);
});



function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}