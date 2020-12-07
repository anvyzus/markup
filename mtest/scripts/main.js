'use strict';

let menu = document.querySelector('.menu');
let menuButton = document.querySelector('.menu__button');
let menuList = document.querySelector('.menu__list');
let scrollPosition = 0;

/*Fix Firefox bug*/
scrollPosition = window.scrollY;

if (scrollPosition > 100) {
  menu.style.background = '#24292E';
}
/*End*/

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('open'); 
  menuList.classList.toggle('show');
});

window.addEventListener('scroll', () => {
  scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    menu.style.background = '#24292E';
  } else {
    menu.style.background = 'transparent';
  }
});