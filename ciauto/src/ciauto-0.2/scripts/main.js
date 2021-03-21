'use strict';

function openMenu() {
  menuBackground.classList.toggle('menu__background--visible');
  menuButton.classList.toggle('menu__button--opened');
  menuList.classList.toggle('menu__list--opened');
}
function closeMenu() {
  if (menuBackground.classList.contains('menu__background--visible')) {
    openMenu();
  } else {
    return;
  }
}

const menuBackground = document.querySelector('.menu__background');
const menuButton = document.querySelector('.menu__button');
const menuList = document.querySelector('.menu__list');

menuButton.addEventListener('click', openMenu);
menuBackground.addEventListener('click', closeMenu);