const swiper = new Swiper('.swiper', {

    loop: true,

    // Навигация
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Пагинация
    pagination: {
        el: '.swiper-pagination',

        // Буллеты
        clickable: true,
    },

    autoHeight: true,
    slidesPerView: 2,

});
