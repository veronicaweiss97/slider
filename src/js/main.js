'use strict';

let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');

    if (n > slides.length) {
        slideIndex = 1;
      }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

const prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    box = document.getElementById('prev'),
    boxTwo = document.getElementById('next');

    box.addEventListener('click', () => {
        prevSlide();
    });

    boxTwo.addEventListener('click', () => {
        nextSlide();
    });





