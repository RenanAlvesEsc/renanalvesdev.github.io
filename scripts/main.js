//Navbar Config

var navList = document.querySelector(".nav-list");
var menuBtn = document.querySelector(".menu-btn");
var container = document.querySelector(".container");

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("on");
});
container.addEventListener('click', () => {
    navList.classList.remove("on");
});
