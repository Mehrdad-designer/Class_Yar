//selecor for institute and classses
const institute = document.querySelector(" .selector button:nth-child(1)");
const classes = document.querySelector(" .selector button:nth-child(2)");

const instituteSection = document.querySelector(" .institute-container");
const classesSection = document.querySelector(".class-container");

if (classesSection != undefined) {
    classesSection.style.display = "none";
}

institute.className = "acctive";

classes.addEventListener("click", (e) => {
    classes.className = "acctive";

    institute.className = "";

    if (classesSection != undefined) {
        classesSection.style.display = "flex";
    }

    if (instituteSection != undefined) {
        instituteSection.style.display = "none";
    }
});

institute.addEventListener("click", (e) => {
    institute.className = "acctive";

    classes.className = "";

    if (instituteSection != undefined) {
        instituteSection.style.display = "flex";
    }

    if (classesSection != undefined) {
        classesSection.style.display = "none";
    }
});




// filter section 
const main_filter=document.querySelector('.contentt');

const contetnBtn = document.querySelector('.filter-list-content');
const timeBtn = document.querySelector('.filter-list-time');
const dayBtn = document.querySelector('.filter-list-day');

const containerContent = document.querySelector('.content-filter');
const timeContent = document.querySelector('.time-filter');
const dayContent = document.querySelector('.day-filter');

// const closeBtn = document.querySelector('.top-section i');
// const call_filterBtn = document.querySelector('.call-filter ');

// closeBtn.addEventListener('click',()=>{
//     main_filter.style.display="none";

//     call_filterBtn.style.display='block'
// })
// call_filterBtn.addEventListener('click',()=>{
//     main_filter.style.display="block";

//     call_filterBtn.style.display='none'
// })




contetnBtn.addEventListener('click', () => {
    contetnBtn.classList.add('acctive');
    timeBtn.classList.remove('acctive');
    dayBtn.classList.remove('acctive');

    containerContent.style.display = "block"
    timeContent.style.display = "none"
    dayContent.style.display = "none"
})


timeBtn.addEventListener('click', () => {
    contetnBtn.classList.remove('acctive');
    timeBtn.classList.add('acctive');
    dayBtn.classList.remove('acctive');

    containerContent.style.display = "none"
    timeContent.style.display = "block"
    dayContent.style.display = "none"
})


dayBtn.addEventListener('click', () => {
    contetnBtn.classList.remove('acctive');
    timeBtn.classList.remove('acctive');
    dayBtn.classList.add('acctive');

    containerContent.style.display = "none"
    timeContent.style.display = "none"
    dayContent.style.display = "block"
})