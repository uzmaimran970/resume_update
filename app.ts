// Get the elements
const toggleBtn = document.getElementById("toggleBtn") as HTMLButtonElement;
const aboutSection = document.getElementById("aboutSection") as HTMLElement;

// Add event listener to the toggle button
toggleBtn.addEventListener("click", () => {
  if (aboutSection.style.display === "none") {
    aboutSection.style.display = "block";
    toggleBtn.textContent = "Hide About Me";
  } else {
    aboutSection.style.display = "none";
    toggleBtn.textContent = "Show About Me";
  }
});




const toggleWorkBtn = document.getElementById("toggleWorkBtn") as HTMLButtonElement;
const workSection = document.getElementById("workSection") as HTMLElement;

toggleWorkBtn.addEventListener("click", () => {
  if (workSection.style.display === "none") {
    workSection.style.display = "block";
    toggleWorkBtn.textContent = "Hide Experience";
  } else {
    workSection.style.display = "none";
    toggleWorkBtn.textContent = "Show Experience";
  }
});



const toggleEduBtn = document.getElementById("toggleEduBtn") as HTMLButtonElement;
const eduSection = document.getElementById("eduSection") as HTMLElement;

toggleEduBtn.addEventListener("click", () => {
  if (eduSection.style.display === "none") {
    eduSection.style.display = "block";
    toggleEduBtn.textContent = "Hide Education";
  } else {
    eduSection.style.display = "none";
    toggleEduBtn.textContent = "Show Education";
  }
});

const btn = document.querySelector("button") as HTMLButtonElement;

btn.onclick = () => {
  window.print();
};















