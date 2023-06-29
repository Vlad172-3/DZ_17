let button1 = document.querySelector("#button1");
let card1 = document.querySelector(".card1");

button1.addEventListener("click", function() {
    button1.style.background = "#F53838";
    button1.style.color = "white";
    button1.style.boxShadow = "0px 30px 30px -5px rgba(245, 56, 56, 0.35)";
    card1.style.border = "solid 2px #F53838";
    card1.classList.remove("animate"); 
    card1.offsetWidth; 
    card1.classList.add("animate"); 
    button2.style.background = "";
    button2.style.color = "";
    button2.style.boxShadow = "";
    card2.style.border = "";
    button3.style.background = "";
    button3.style.color = "";
    button3.style.boxShadow = "";
    card3.style.border = "";
})

let button2 = document.querySelector("#button2")
let card2 = document.querySelector(".card2");

button2.addEventListener("click", function() {
    button2.style.background = "#F53838";
    button2.style.color = "white";
    button2.style.boxShadow = "0px 30px 30px -5px rgba(245, 56, 56, 0.35)";
    card2.style.border = "solid 2px #F53838";
    card2.classList.remove("animate"); 
    card2.offsetWidth; 
    card2.classList.add("animate"); 
    button1.style.color = "";
    button1.style.boxShadow = "";
    button1.style.background = "";
    card1.style.border = "";
    button3.style.background = "";
    button3.style.color = "";
    button3.style.boxShadow = "";
    card3.style.border = "";
})

let button3 = document.querySelector("#button3")
let card3 = document.querySelector(".card3");

button3.addEventListener("click", function() {
    button3.style.background = "#F53838";
    button3.style.color = "white";
    button3.style.boxShadow = "0px 30px 30px -5px rgba(245, 56, 56, 0.35)";
    card3.style.border = "solid 2px #F53838";
    card3.classList.remove("animate"); 
    card3.offsetWidth; 
    card3.classList.add("animate"); 
    button1.style.background = "";
    button1.style.color = "";
    button1.style.boxShadow = "";
    card1.style.border = "";
    button2.style.background = "";
    button2.style.color = "";
    button2.style.boxShadow = "";
    card2.style.border = "";
})

let comment = document.querySelectorAll("#comment");
let btn = document.querySelectorAll("#btn")
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
let arrow = document.querySelector(".arrow");
let arrow1 = document.querySelector(".arrow1");
let current = 0;

function resetMobile() {
    let isMobile = document.documentElement.clientWidth <= 1250;
    for (let i = 0; i < comment.length; i++) {
        comment[i].style.display = isMobile ? "none" : "block";
    }
}

function reset() {
    for (let i = 0; i < comment.length; i++) {
        comment[i].style.border = "solid 2px #DDDDDD";
        comment[i].style.transform = "scale(1)";
        btn[i].style.background = "#F53838";
        btn[i].style.width = "15px";
        btn[i].style.height = "15px";
        btn[i].style.background = "#DDE0E4";
        button1.style.background = "white"
    }
}

function startComment() {
    comment[current].style.border = "solid 2px #F53838";
    comment[current].style.transform = "scale(1.05)";
    btn[current].style.background = "#F53838";
}

function showComment() {
    reset();
    resetMobile();
    comment[current].style.border = "solid 2px #F53838";
    comment[current].style.display = "block";
    comment[current].style.transition = "all 0.5s ease";
    comment[current].style.transform = "scale(1.05)";
    btn[current].style.background = "#F53838";
    btn[current].style.width = "40.1px";
    btn[current].style.height = "15px";
    btn[current].style.borderRadius = "10px";
    btn[current].style.transition = "all 0.5s ease";
}

arrowLeft.addEventListener("click", function () {
    arrowLeft.style.background = "#F53838";
    arrow1.src = "img/white-arrow.png";
    arrow1.style.transform = "rotate(180deg)";
    arrowRight.style.background = "white";
    arrow.src = "img/arrow.png";
    arrow.style.transform = "rotate(180deg)";
    current--;
    if (current < 0) {
        current = comment.length - 1;
    }
    showComment(current);
});

arrowRight.addEventListener("click", function () {
    arrowRight.style.background = "#F53838";
    arrow.src = "img/white-arrow.png";
    arrow.style.transform = "rotate(0deg)";
    arrowLeft.style.background = "white";
    arrow1.src = "img/arrow.png";
    arrow1.style.transform = "rotate(0deg)";
    current++;
    if (current >= comment.length) {
        current = 0;
    }
    showComment(current);
});

btn.forEach(function (button, index) {
    button.addEventListener("click", function () {
        current = index;
        showComment(current);
    });
});

startComment();






