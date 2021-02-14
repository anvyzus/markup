'use strict';

// let menu = document.querySelector('.menu');
// let menuButton = document.querySelector('.menu__button');
// let menuList = document.querySelector('.menu__list');
// let scrollPosition = 0;

// /*Fix Firefox bug*/
// scrollPosition = window.scrollY;

// if (scrollPosition > 100) {
//   menu.style.background = '#24292E';
// }
// /*End*/

// menuButton.addEventListener('click', () => {
//   menuButton.classList.toggle('open'); 
//   menuList.classList.toggle('show');
// });

// window.addEventListener('scroll', () => {
//   scrollPosition = window.scrollY;

//   if (scrollPosition > 100) {
//     menu.style.background = '#24292E';
//   } else {
//     menu.style.background = 'transparent';
//   }
// });

function openMenu() {
  menuButton.classList.toggle('menu__button--activated');
  menuList.classList.toggle('menu__list--shown');
  if (menuList.style.transition === 'transform 0.2s ease-in-out 0s') {
    setTimeout(() => menuList.removeAttribute('style'), 200);
  } else {
    menuList.style.transition = 'transform ease-in-out 0.2s';
  }
  // } else {
  //   menuList.removeAttribute('style');
  // }
  // if (document.querySelector('.menu').offsetWidth < 768) {

  // }
  // if (menuList.style.transition === 'transform 0.2s ease-in-out 0s') {
  //   menuList.style.transition = 'transform 0s ease-in-out 0.2s';
  // } else {
  //   menuList.style.transition = 'transform 0.2s ease-in-out 0s';
  // }
  // if (menuList.style.transition === 'transform 0.2s ease-in-out 0s') {
  //   // setTimeout(() => menuList.removeAttribute('style'), 0);
  //   tr
  //   // menuList.removeAttribute('style');
  // } else {
  //   menuList.style.transition = 'transform ease-in-out 0.2s';
  // }
  // transition: transform ease-in-out 0.2s;
}

let menuButton = document.querySelector('.menu__button');
let menuList = document.querySelector('.menu__list');

menuButton.addEventListener('click', openMenu);