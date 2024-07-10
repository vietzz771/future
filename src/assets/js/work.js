// Generate database work.js
const selectedProject = JSON.parse(localStorage.getItem("selectedProject"));

if (selectedProject) {
  const projectNameElement = document.getElementById("project-name");
  const projectImagesContainer = document.getElementById("gallery-wrap-work");

  projectNameElement.textContent = selectedProject.name;

  selectedProject.images.forEach((image) => {
    console.log(image);
    const projectElement = document.createElement("div");
    projectElement.classList.add("image-container", "rounded-lg");
    projectElement.innerHTML = `<a
                data-fancybox="gallery"
                data-src="${image}"
              >
                <img
                  src="${image}"
                  alt="${selectedProject.name}"
                  class="rounded-lg cursor-pointer"
                />
              </a>`;
    projectImagesContainer.appendChild(projectElement);
  });
} else {
  document.getElementById("project-details-container").textContent = "Không có thông tin dự án được chọn.";
}


/*===== SCROLL REVEAL ANIMATION =====*/
window.addEventListener('load', () => {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
  });
  sr.reveal(".image-container", { interval: 100 });
});