'use strict';

const alc = document.querySelector('.accordion__animation-btn')

document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion__button--active');

        if (button.classList.contains('accordion__button--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    });
});



const burgerBtn = document.querySelector('.burger');
const menuList = document.querySelector('.tp-inner-box');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
    body.classList.toggle('active');
});



// const tpinner = document.querySelector('.tp-inner');

// window.addEventListener('scroll', () => {
//     if (window.this.scrollTop() > 0) {
//         tpinner.classList.toggle('static', this.scrollTop() > 800);
//     } else {
//         tpinner.classList.remove('static');
//     }
// })

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 0) {
//         $('.tp-inner').toggleClass('static', $(this).scrollTop() > 800);
//     } else {
//         $('.tp-innerp').removeClass('static');
//     }
// })