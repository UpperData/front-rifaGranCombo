// Obtener el botón
let mybutton = document.getElementById("scrollToTopBtn");

// Mostrar el botón cuando el usuario hace scroll hacia abajo 20px desde la parte superior del documento
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Cuando el usuario hace clic en el botón, se desplaza hacia la parte superior del documento
mybutton.onclick = function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
};
