'use strict';

let menuButton = document.querySelector('.menu__button');
let menuList = document.querySelector('.menu__list');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open'); 
    menuList.classList.toggle('show');
});