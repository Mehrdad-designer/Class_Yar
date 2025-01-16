//        nav-loginSection
const login = document.querySelector(".nav button:first-child");
const signin = document.querySelector(".nav button:last-child");

const loginbtn = document.getElementById("login");
//nav-signinSection

const loginsection = document.querySelector(".login-section");
const signinsection = document.querySelector(".sigh-in-section");

signinsection.style.display = "none";
signin.addEventListener("click", (e) => {
    signin.className = "active";

    login.className = "";

    loginsection.style.display = "none";
    signinsection.style.display = "block";
});

loginbtn.addEventListener("click", (e) => {
    login.className = "active";

    signin.className = "";

    signinsection.style.display = "none";
    loginsection.style.display = "flex";
});
