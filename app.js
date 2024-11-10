// Get the elements
var toggleBtn = document.getElementById("toggleBtn");
var aboutSection = document.getElementById("aboutSection");
// Add event listener to the toggle button
toggleBtn.addEventListener("click", function () {
    if (aboutSection.style.display === "none") {
        aboutSection.style.display = "block";
        toggleBtn.textContent = "Hide About Me";
    }
    else {
        aboutSection.style.display = "none";
        toggleBtn.textContent = "Show About Me";
    }
});
var toggleWorkBtn = document.getElementById("toggleWorkBtn");
var workSection = document.getElementById("workSection");
toggleWorkBtn.addEventListener("click", function () {
    if (workSection.style.display === "none") {
        workSection.style.display = "block";
        toggleWorkBtn.textContent = "Hide Experience";
    }
    else {
        workSection.style.display = "none";
        toggleWorkBtn.textContent = "Show Experience";
    }
});
var toggleEduBtn = document.getElementById("toggleEduBtn");
var eduSection = document.getElementById("eduSection");
toggleEduBtn.addEventListener("click", function () {
    if (eduSection.style.display === "none") {
        eduSection.style.display = "block";
        toggleEduBtn.textContent = "Hide Education";
    }
    else {
        eduSection.style.display = "none";
        toggleEduBtn.textContent = "Show Education";
    }
});
var btn = document.querySelector("button");
btn.onclick = function () {
    window.print();
};
