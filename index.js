
const menuBtn = document.getElementById("menu_btn");

const navLinks = document.getElementById("nav_links");
const menuBtnIcon = menuBtn.querySelector("svg");
const closeBtnNavMenu = document.querySelector(".nav_menu_btn_bi-x");
const slides = document.querySelectorAll(".hero_slider1_slide");
const prevButton = document.getElementById("prev_slide");
const nextButton = document.getElementById("next_slide");
const currentSlideIndicator = document.getElementById("current_slide");
const nav2 = document.getElementById("nav2");


menuBtn.addEventListener("click", (event) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");

    // menuBtnIcon.setAttribute("class", isOpen?"ri-close-line" : "ri-menu-line")

    if (isOpen) {
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

document.addEventListener("DOMContentLoaded", function () {

    let currentSlideIndex = 0;

    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    })

    function showSlide(index) {

        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`
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

document.addEventListener("DOMContentLoaded", function () {
    function scrollFunction() {
        if (document.body.scrollTop > 372 || document.documentElement.scrollTop > 372) {
            nav2.style.top = "0";
        } else {

            nav2.style.top = "-56px"
        }
    }

    window.onscroll = function () {
        scrollFunction();
    }
})


document.addEventListener("DOMContentLoaded", function () {
    const allSlides = document.querySelectorAll(".hero_slider2_carousel_item");
    const prevBtn = document.getElementById("hero_slider2_prev");
    const nextBtn = document.getElementById("hero_slider2_next");
    const indicator = document.querySelector(".hero_slider2_indicator");
    const tsmCurrent = document.querySelector(".tsm_current");
    let currentIndex = 0;


    function showIncdicator(index) {
        indicator.textContent = (index + 1) + " / " + allSlides.length;
        tsmCurrent.textContent = `TESTIMONIAL ${(index + 1)}`;
    }

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + allSlides.length) % allSlides.length;
        showIncdicator(currentIndex);
    })

    nextBtn.addEventListener("click", function () {

        currentIndex = (currentIndex + 1) % allSlides.length;
        showIncdicator(currentIndex);
    })
    showIncdicator(currentIndex);
})

document.addEventListener("DOMContentLoaded", function () {


    const allSlides = document.querySelectorAll(".hs3_slide");
    const indicator = document.querySelector(".hs3_indicator");
    const prevBtn = document.querySelector(".hs3_prev");
    const nextBtn = document.querySelector(".hs3_next");
    let currentIndex = 0;

    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        slidesPerView: "auto",
        spaceBetween: 30,
    });

    function showIncdicator(index) {
        indicator.textContent = (index + 1) + " / " + allSlides.length;
    }

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + allSlides.length) % allSlides.length;
        showIncdicator(currentIndex);
    })

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % allSlides.length;
        showIncdicator(currentIndex);
    })

    showIncdicator(currentIndex);

})