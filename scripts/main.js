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



//Scroll Config

window.onscroll = () => {
    mudarCorNav()
}

var navBar = document.querySelector(".navbar");

function mudarCorNav() {
    var body = document.body;
    var docEl = document.documentElement;
    var viewport = window.innerHeight;
    var section1 = viewport - 73;
    var section2 = viewport * 2 - 73 * 2;

    if (body.scrollTop >= section1 || docEl.scrollTop >= section1) {

        navBar.classList.add("nav-style-1");

         if (body.scrollTop >= section2 || docEl.scrollTop >= section2) {
            navBar.classList.add("nav-style-2");
        }
        else {
            navBar.classList.remove("nav-style-2");
        }
    }
    else {
        navBar.classList.remove("nav-style-1");
    }
}

