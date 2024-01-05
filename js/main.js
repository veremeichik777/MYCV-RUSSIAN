document.addEventListener("DOMContentLoaded", function(){
document.getElementById("burger").addEventListener("click",function(){
    document.querySelector("header").classList.toggle("open")
})
});


// Закрыть меню при нажатии на ESCAPE

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        // Действие при клике 
        document.querySelector(".header").classList.remove("open")
    }
});

// Закрыть меню при клике вне его

document.getElementById("nav").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});

document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});

document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    // Действия при клике
    document.querySelector(".header").classList.remove("open")
});