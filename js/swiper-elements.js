document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        speed: 250,
        spaceBetween: 100,
        initialSlide: 0,
        autoHeight: false,
        direction: 'horizontal',
        slidesPerView: "auto",
        loop: true,
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});