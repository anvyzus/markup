'use strict';

//Menu

let menu = document.querySelector('.menu');
let menuButton = document.querySelector('.header__menu-button');


function showMenu() {
    // let x = document.querySelector('myLinks');

    menu.classList.toggle('header__menu--active');

    // if (menu.style.display === '0.0s') {
    //     menu.style.transition = '0.3s';
    // } else if (menu.style.display === '0.3s') {
    //     menu.style.transition = '0.0s';
    // }
    // if (menu.style.transform === 'translateX(-99%)') {
    //     menu.style.transition = 'transform 0.3s';
    // } else if (menu.style.transform === 'translateX(0%)') {
    //     menu.style.transition = 'transform 0.3s';
    // }
    // menu.style.transition = 'transform 0.3s';
    menuButton.classList.toggle('header__menu-button--active');
}

menuButton.onclick = showMenu;

//Parallax

// $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});