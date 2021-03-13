'use strict';

const button = document.querySelector('.header__button');
const main = document.querySelector('.main');

function changeColor() {
  main.classList.toggle('red')
}

button.addEventListener('click', changeColor);