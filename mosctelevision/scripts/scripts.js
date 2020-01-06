'use strict';

//Menu

let menuButton = document.querySelector('.header__menu-button');
let menu = document.querySelector('.menu');

function showMenu() {
    menu.classList.toggle('header__menu--active');
    menuButton.classList.toggle('header__menu-button--active');
}

menuButton.onclick = showMenu;

//Menu color
if (window.innerWidth > 768) {
    if (window.pageYOffset > 50) {
        document.querySelector('.header__inner-wrapper').style.background = '#333';
        window.onscroll = scrollFunction;
        document.querySelector('.header__inner-wrapper').style.transition = 'background-color 0.3s';
    } else if (window.innerWidth > 768 && window.pageYOffset < 50) {
        document.querySelector('.header__inner-wrapper').style.background = 'transparent';
        document.querySelector('.header__inner-wrapper').style.transition = 'background-color 0.3s';
        window.onscroll = scrollFunction;
    }
} else {
    // document.querySelector('.header__inner-wrapper').style.background = '#333';
    document.querySelector('.header__inner-wrapper').style.transition = 'background-color 0.3s';
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.header__inner-wrapper').style.background = '#333';
    } else {
        document.querySelector('.header__inner-wrapper').style.background = 'transparent';
    }
}

// let prevScrollpos = window.pageYOffset;

// if (prevScrollpos > 50 && window.innerWidth > 768) {
//     document.querySelector('.header__inner-wrapper').style.background = '#333';

//     window.onscroll = function() {
//         scrollFunction()
//     }; 
// } else if (prevScrollpos < 50 && window.innerWidth < 768) {
//     document.querySelector('.header__inner-wrapper').style.background = '#333';
// } else {
//     document.querySelector('.header__inner-wrapper').style.background = 'transparent';
//     window.onscroll = function() {
//         scrollFunction()
//     }; 
// }

// function scrollFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.querySelector('.header__inner-wrapper').style.background = '#333';
//     } else {
//         document.querySelector('.header__inner-wrapper').style.background = 'transparent';
//     }
// }

// window.onscroll = function() {
//     scrollFunction()
// }; 

//ScrollTo

$(document).ready(function() {
    $('.menu').on('click','a', function (event) {
        event.preventDefault(); //отменяем стандартную обработку нажатия по ссылке

        var id = $(this).attr('href'), //забираем идентификатор бока с атрибута href

        top = $(id).offset().top; //узнаем высоту от начала страницы до блока на который ссылается якорь

        $('body,html').animate({scrollTop: top}, 300); //анимируем переход на расстояние - top за 300 мс

        showMenu();
    });
});

//Parallax

// $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});