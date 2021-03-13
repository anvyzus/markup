'use strict';

const button = document.querySelector('.header__button');
const main = document.querySelector('.main');

function createElem() {
  let div = document.createElement('div');

  div.className = "elem";
  div.innerHTML = "New element";

  main.after(div);
}

button.addEventListener('click', createElem);

// function changeColor() {
//   main.classList.toggle('red');
// }

// button.addEventListener('click', changeColor);