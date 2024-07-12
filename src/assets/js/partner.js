import { partners } from "./data.js";

// Generate database
const partnersContainer = document.getElementById("partners-container");

partners.forEach((partner) => {
  const partnersElement = document.createElement("div");
  partnersElement.classList.add("partner-content", "rounded-lg");
  partnersElement.innerHTML = `<div class="flex flex-col items-center py-4 partner-sr">
                <div class="partner-img">
                  <img src="${partner.coverImage}" alt="${partner.name}" class="w-40 h-40 rounded-full object-cover" />
                </div>
                <div class="mt-3">
                  <h2 class="font-semibold text-[20px] capitalize">${partner.name}</h2>
                </div>
              </div>`;
  partnersContainer.appendChild(partnersElement);
});

/*===== SCROLL REVEAL ANIMATION =====*/
window.addEventListener("load", () => {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
    beforeReveal: (el) => {
      el.style.opacity = 1;
      el.style.visibility = "visible";
    },
  });
  sr.reveal(".partner-list, .partner-content, .title-text, .partner-sr", { interval: 100 });
});
