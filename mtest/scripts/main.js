'use strict';

let menu = document.querySelector('.menu');
let menuButton = document.querySelector('.menu__button');
let menuList = document.querySelector('.menu__list');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open'); 
    menuList.classList.toggle('show');
});

let scrollPosition = 0;
let ticking = false;
let menuLogo = document.querySelector('.menu__logo');
// let menuLogoPicture = a;
let menuLink = document.querySelectorAll('.menu__link');
 
// function doSomething(scrollPosition) {
//     // Do something with the scroll position
//     if (scrollPosition > 100) {
//         menu.classList.toggle('white');
//         // menu.style.background = '#FFF';
//     } else {
//         menu.classList.toggle('white');
//         // menu.classList.toggle('transparent');
//         // menu.style.background = 'transparent';
//     }
// }

window.addEventListener('scroll', function(e) {
    // let windowWidth = window.innerWidth; && windowWidth > 1024


    scrollPosition = window.scrollY;
    // console.log(scrollPosition + 'px');

    if (scrollPosition > 100) {
        menu.style.background = '#24292E';
    } else {
        menu.style.background = 'transparent';
    }
    // if (scrollPosition > 100) {
    //     // menu.classList.toggle('white');
    //     menu.style.background = '#FFF';
    //     menuLogo.style.color = '#000';
    //     // menuLogo.style.background = 'url("logotype-black.svg")';
    //     // background-image: url("../images/logotype-white.svg");
        
    //     for (let iterator of menuLink) {
    //         iterator.style.color = '#000';
    //     }
        
    // } else {
    //     // menu.classList.toggle('white');
    //     menu.style.background = 'transparent';
    //     menuLogo.style.color = '#FFF';
    //     // menuLogo.style.backgroundImage = 'url("../images/logotype-black.svg")';
    //     // background-image: url("../images/logotype-white.svg");
    //     for (let iterator of menuLink) {
    //         iterator.style.color = '#FFF';
    //     }
    // }

    // scrollPosition2 = window.pageYOffset;
    // console.log(scrollPosition2);


    // wids = window.innerWidth;
    // console.log(wids);

    // if (scrollPosition > 100) {
    //     menu.classList.toggle('white');
    // }

    // if (!ticking) {
    //     window.requestAnimationFrame(function() {
    //         doSomething(scrollPosition);
    //         ticking = false;
    //     });

    //     ticking = true;
    // }
});
// let last_known_scroll_position = 0;
// let ticking = false;

// function doSomething(scroll_pos) {
//   // Do something with the scroll position
// }

// window.addEventListener('scroll', function(e) {
//   last_known_scroll_position = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });