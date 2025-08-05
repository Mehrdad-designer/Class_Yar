//selecor for institute and classses
const institute = document.querySelector(" .selector button:nth-child(1)");
const classes = document.querySelector(" .selector button:nth-child(2)");

const instituteSection = document.querySelector(" .institute-container");
const classesSection = document.querySelector(".class-container");
//filter selector section
const filter_institutes=document.querySelector('#filter-box1')
const filter_classes=document.querySelector('#filter-box2')


if (filter_classes != undefined) {
    filter_classes.style.display = "none";
}
if (classesSection != undefined) {
    classesSection.style.display = "none";
}

institute.className = "acctive";
//selector section
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

//filter events
classes.addEventListener('click',(e)=>{
    if (filter_classes != undefined) {
        filter_classes.style.display = "block";
    }
    if (filter_institutes != undefined) {
        filter_institutes.style.display = "none";
    }
})
institute.addEventListener('click',(e)=>{
    if (filter_classes != undefined) {
        filter_classes.style.display = "none";
    }
    if (filter_institutes != undefined) {
        filter_institutes.style.display = "block";
    }
});