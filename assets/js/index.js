//------------------------more discos start----------------------
function toggleText() {
    const fullText = document.querySelector('.full-text');
    const button = document.querySelector('.toggle-btn');
    
    if (fullText.style.display === 'block') {
        fullText.style.display = 'none';
        button.textContent = 'توضیحات بیشتر';
    } else {
        fullText.style.display = 'block';
        button.textContent = 'توضیحات کمتر';
    }
}


//-------------------------more discose end-----------------------


//selector slider index

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