'use strict';

// Languages

function showLangList() {
  langList.classList.toggle('lang--visible');
}
function changeLang(event) {
  let target = event.target;
  langButton.textContent = target.textContent;
  showLangList();
}

const langButton = document.querySelector('.menu__lang-button');
const langItems = document.querySelectorAll('.lang__item');
const langList = document.querySelector('.lang');
const langText = document.querySelector('.menu__lang');

langButton.addEventListener('click', showLangList);
langList.addEventListener('click', changeLang);

// Menu-Button

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
const headerButton = document.querySelector('.header__link');
const navbarLinks = document.querySelectorAll('.menu__link');

// for (let i = 0; i < navbarLinks.length; i++) {
//   navbarLinks[i].addEventListener("click", navbarLinkClick);
// }

// headerButton.addEventListener('click', navbarLinkClick);
menuButton.addEventListener('click', openMenu);
menuBackground.addEventListener('click', closeMenu);