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
function navbarLinkClick(event) {
  smoothScroll(event); // Call the "smoothScroll" function
  // showMenu();

  if (menuButton.classList.contains('menu__button--activated')) { // Close navbarMenu in smaller screens
    showMenu();
  }

}

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

let menuButton = document.querySelector('.menu__button');
let menuList = document.querySelector('.menu__list');
let menuPopup = document.querySelector('.menu__popup');
let navbarLinks = document.querySelectorAll('.menu__link');
let headerButton = document.querySelector('.header__button');

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navbarLinkClick);
}

menuButton.addEventListener('click', showMenu);
menuPopup.addEventListener('click', showMenu);
headerButton.addEventListener('click', navbarLinkClick);