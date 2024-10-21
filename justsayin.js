const toggleBtn = document.getElementById("resume-toggle-button");
const homeBtn = document.getElementById("home-button")
const loginBtn = document.getElementById("login-button");
const signupBtn = document.getElementById("signup-button");
const resume = document.getElementById("resume-pdf");

if(toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        if (resume.style.display === "block") {
            resume.style.display = "none";
            toggleBtn.textContent = "Show Resume";
        }
        else {
            resume.style.display = "block";
            toggleBtn.textContent = "Hide Resume";
        }
    });
}

homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
})

loginBtn.addEventListener("click", () => {
    window.location.href = "login.html";
})

signupBtn.addEventListener("click", () => {
    window.location.href = "signup.html";
})