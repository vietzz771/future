import { projects } from "./data.js";

// Generate databases index.js
const projectsContainer = document.getElementById("projects-container");

projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("image-container", "rounded-lg");
  projectElement.innerHTML = `<img src="${project.coverImage}" alt="${project.name}" class="rounded-lg cursor-pointer" data-id="${project.id}" />
  <div class="image-title">${project.name}</div>`;
  projectsContainer.appendChild(projectElement);
});

// Handle event click on image
projectsContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    const projectId = event.target.getAttribute("data-id");
    const project = projects.find((p) => p.id == projectId);

    localStorage.setItem("selectedProject", JSON.stringify(project));

    window.location.href = "work.html";
  }
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
});
sr.reveal(".main-text .info", {
  delay: 200,
});
sr.reveal(".img-list ", { delay: 200 });
sr.reveal(".image-container", {delay: 100});
sr.reveal(".main-text, .info", { delay: 200 });
sr.reveal(".img-list, .image-container", { interval: 100 });
