'use strict';

function showMenu() {
  menuButton.classList.toggle('menu__button--activated');
  menuList.classList.toggle('menu__list--shown');
  menuPopup.classList.toggle('menu__popup--visible');
  
  if (menuList.style.transition === 'transform 0.2s ease-in-out 0s') {
    setTimeout(() => menuList.removeAttribute('style'), 200);
  } else {
    menuList.style.transition = 'transform ease-in-out 0.2s';
  }
}

let menuButton = document.querySelector('.menu__button');
let menuList = document.querySelector('.menu__list');
let menuPopup = document.querySelector('.menu__popup');

menuButton.addEventListener('click', showMenu);
menuPopup.addEventListener('click', showMenu);