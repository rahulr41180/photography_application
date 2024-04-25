
const menuBtn = document.getElementById("menu_btn");

const navLinks = document.getElementById("nav_links");
const menuBtnIcon = menuBtn.querySelector("svg");
const closeBtnNavMenu = document.querySelector(".nav_menu_btn_bi-x");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev_slide");
const nextButton = document.getElementById("next_slide");
const currentSlideIndicator = document.getElementById("current_slide");
const nav2 = document.getElementById("nav2");

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
});


navLinks.addEventListener("click", (event) => {
    navLinks.classList.remove("open");
    closeBtnNavMenu.style.display = "none";
    menuBtnIcon.style.display = "block";
})

document.addEventListener("DOMContentLoaded", function() {

    let currentSlideIndex = 0;

    slides.forEach((slide, index) => {
        slide.style.top = `${index * 100}%`;
    })

    function showSlide(index) {

        slides.forEach((slide, i) => {
            slide.style.transform = `translateY(-${index * 100}%)`
        })
        currentSlideIndicator.textContent = (index + 1) + " / " + slides.length;
    }

    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);

    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    showSlide(currentSlideIndex);
})

document.addEventListener("DOMContentLoaded", function() {
    function scrollFunction() {
        if(document.body.scrollTop > 372 || document.documentElement.scrollTop > 372) {
            nav2.style.top = "0";
        } else {

            nav2.style.top = "-56px"
        }
    }

    window.onscroll = function() {
        scrollFunction();
    }
})