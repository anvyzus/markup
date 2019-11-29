let button = document.querySelector('.header__button');

function showMenu() {
    let menu = document.querySelector('.menu');
    
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

    this.classList.toggle("change");
}

button.onclick = showMenu;