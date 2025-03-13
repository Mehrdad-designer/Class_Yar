//the swiper has been imported in swiper-bundle.min.js file
//swiper index
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
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
// const institute = document.querySelector(".selector button:nth-child(1)");
// const classes = document.querySelector(".selector button:nth-child(2)");

// const instituteSection = document.querySelector(".ane .institute");
// const classesSection = document.querySelector(".ane .classes");

// classesSection.style.display = "none";

// institute.className = "acctive";

// classes.addEventListener("click", (e) => {
//     classes.className = "acctive";

//     institute.className = "";

//     classesSection.style.display = "";

//     instituteSection.style.display = "none";
// });

// institute.addEventListener("click", (e) => {
//     institute.className = "acctive";

//     classes.className = "";

//     instituteSection.style.display = "";

//     classesSection.style.display = "none";
// });





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