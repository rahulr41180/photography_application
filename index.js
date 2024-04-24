
const menuBtn = document.getElementById("menu_btn");

const navLinks = document.getElementById("nav_links");
const menuBtnIcon = menuBtn.querySelector("svg");
const closeBtnNavMenu = document.querySelector(".nav_menu_btn_bi-x");

menuBtn.addEventListener("click", (event) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    // menuBtnIcon.setAttribute("class", isOpen?"ri-close-line" : "ri-menu-line")

    if(isOpen) {
        closeBtnNavMenu.style.display = "block";
        menuBtnIcon.style.display = "none";
    } else {
        closeBtnNavMenu.style.display = "none";
        menuBtnIcon.style.display = "block";
    }
})