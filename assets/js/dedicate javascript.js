//the swiper has been imported in swiper-bundle.min.js file
//swiper index
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
        // when window width is <= 999px
        576: {
            slidesPerView: 2,
            spaceBetweenSlides: 30,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView:4,
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

const instituteNew = document.querySelector(
    ".project-area-two .selector button:nth-child(1)"
);
const classesNew = document.querySelector(
    ".project-area-two .selector button:nth-child(2)"
);

const instituteSectionNew = document.querySelector(
    ".project-area-two .ane-new .institute-new"
);
const classesSectionNew = document.querySelector(
    ".project-area-two .ane-new .classes-new"
);

if (classesSectionNew != undefined) {
    classesSectionNew.style.display = "none";
}

instituteNew.className = "acctive";

classesNew.addEventListener("click", (e) => {
    classesNew.className = "acctive";

    instituteNew.className = "";

    classesSectionNew.style.display = "";
    instituteSectionNew.style.display = "none";
});

instituteNew.addEventListener("click", (e) => {
    instituteNew.className = "acctive";

    classesNew.className = "";

    instituteSectionNew.style.display = "";

    classesSectionNew.style.display = "none";
}); 