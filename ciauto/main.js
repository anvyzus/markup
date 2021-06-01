'use strict';

function smoothScroll(event) {
  event.preventDefault();

  let targetId = event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href");
  let targetPosition = document.querySelector(targetId).offsetTop;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let duration = 700;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;

    let progress = timestamp - start;

    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));

    if (progress < duration) window.requestAnimationFrame(step);
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  };
}
function navbarLinkClick(event) {
  smoothScroll(event);

  if (menuButton.classList.contains('menu__button--opened')) {
    openMenu();
  }
}
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

let menuBackground = document.querySelector('.menu__background');
let menuButton = document.querySelector('.menu__button');
let menuList = document.querySelector('.menu__list');
let navbarLinks = document.querySelectorAll('.menu__link');
let headerButton = document.querySelector('.header__link-button--top');

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navbarLinkClick);
}

headerButton.addEventListener('click', navbarLinkClick);
menuButton.addEventListener('click', openMenu);
menuBackground.addEventListener('click', closeMenu);


