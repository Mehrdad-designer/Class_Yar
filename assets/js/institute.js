//selecor for institute and classses 

const institute = document.querySelector(" .selector button:nth-child(1)");
const classes = document.querySelector(" .selector button:nth-child(2)");

const instituteSection = document.querySelector(" .institute-container");
const classesSection = document.querySelector(".classes");

if (classesSection != undefined) {
    classesSection.style.display = "none";
}

institute.className = "acctive";

classes.addEventListener("click", (e) => {
    classes.className = "acctive";

    institute.className = "";

        classesSection.style.display = "";
    

    
        instituteSection.style.display = "none";
    
});

institute.addEventListener("click", (e) => {
    institute.className = "acctive";

    classes.className = "";

        instituteSection.style.display = "";

        classesSection.style.display = "none";
    
});
