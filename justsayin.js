const toggleBtn = document.getElementById("resume-toggle-button");
const resume = document.getElementById("resume-pdf");

toggleBtn.addEventListener("click", () => {
    if (resume.style.display === "block") {
        resume.style.display = "none";
        toggleBtn.textContent = "Show Resume"
    }
    else {
        resume.style.display = "block"
        toggleBtn.textContent = "Hide Resume"
    }
});