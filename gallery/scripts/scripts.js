let modal = document.querySelector('.modal');
let zoomImages = document.querySelectorAll('.gallery__image');
let modalImage = document.querySelector('.modal__image');
let zoomButtons = document.querySelectorAll('.gallery__zoom-button');
let modalButton = document.querySelector('.modal__close-button');

for (let i = 0, j = 0; i < zoomButtons.length, j < zoomImages.length; i++, j++) {
    zoomButtons[i].onclick = function() {
        modal.style.display = "flex";

        if (i === j) {
            modalImage.src = zoomImages[j].src;
        }
    }
}

modalButton.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}