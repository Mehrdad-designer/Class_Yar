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



 const institute = document.querySelector(
     ".selector button:nth-child(1)"
 );
 const classes = document.querySelector(
     ".selector button:nth-child(2)"
 );

 const instituteSection = document.querySelector(".ane .institute");
 const classesSection = document.querySelector(".ane .classes");

 if (classesSection != undefined) {
     classesSection.style.display = "none";
 }

 institute.className = "acctive";

 classes.addEventListener("click", (e) => {
     classes.className = "acctive";

     institute.className = "";

     if (classesSection != undefined) {
         classesSection.style.display = "block";
     }
     if (instituteSection != undefined) {
         instituteSection.style.display = "none";
     }
 });

 institute.addEventListener("click", (e) => {
     institute.className = "acctive";

     classes.className = "";

     if (instituteSection != undefined) {
         instituteSection.style.display = "block";
     }

     if (classesSection != undefined) {
         classesSection.style.display = "none";
     }
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

      if (classesSectionNew != undefined) {
          classesSectionNew.style.display = "block";
      }
      if (instituteSectionNew != undefined) {
          instituteSectionNew.style.display = "none";
      }
  });

  instituteNew.addEventListener("click", (e) => {
      instituteNew.className = "acctive";

      classesNew.className = "";

      if (instituteSectionNew != undefined) {
          instituteSectionNew.style.display = "block";
      }

      if (classesSectionNew != undefined) {
          classesSectionNew.style.display = "none";
      }
  });

