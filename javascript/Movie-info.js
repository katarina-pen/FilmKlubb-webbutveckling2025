// Hamburgar menyn koden är gjord / lånad av dev.to
const menu = document.querySelector(".menu")
const hamburger = document.querySelector(".hamburger")
const closeIcon = document.querySelector(".closeIcon")
const menuIcon = document.querySelector(".menuIcon")

menuIcon.style.display = "block";
closeIcon.style.display = "none";

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach(

    function (menuItem) {

        menuItem.addEventListener("click", toggleMenu);

    }

)