//the swiper has been imported in swiper-bundle.min.js file
//swiper index
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    slidesPerView: 1.25,
    freeMode: true,
    breakpoints: {
        // when window width is <= 999px
        576: {
            slidesPerView: 2.25,
            // spaceBetweenSlides: 30,
        },
        768: {
            slidesPerView: 3.25,
        },
        992: {
            slidesPerView:4.25,
        }
    },
});
var swiper = new Swiper(".classDetailSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

