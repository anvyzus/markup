let button = document.querySelector('.header__button');

function showMenu() {
    let menu = document.querySelector('.menu');

    button.classList.toggle("header__button--active");
    menu.classList.toggle("header__menu--active");
}

button.onclick = showMenu;