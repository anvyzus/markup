'use strict';

const navbarMenu = document.querySelector(".menu ul");
const navbarLinks = document.querySelectorAll(".menu a");

// navbarToggler.addEventListener("click", navbarTogglerClick);

// function navbarTogglerClick() {
// navbarToggler.classList.toggle("open-navbar-toggler");
// navbarMenu.classList.toggle("open");
// }

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", navbarLinkClick);
}

function navbarLinkClick(event) {
    smoothScroll(event); // Call the "smoothScroll" function

    if (navbarMenu.classList.contains("open")) { // Close navbarMenu in smaller screens
        navbarToggler.click();
    }
}

function smoothScroll(event) {
    event.preventDefault();

    let targetId = event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href");
    let targetPosition = document.querySelector(targetId).offsetTop;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let duration = 1000;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;

        let progress = timestamp - start;

        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));

        if (progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t * t + b;
	t -= 2;
	return c / 2 * (t * t * t + 2) + b;
};