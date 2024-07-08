// Toggle mobile menu
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  const isExpanded = mobileMenuButton.getAttribute("aria-expanded") === "true";
  mobileMenuButton.setAttribute("aria-expanded", !isExpanded);
  mobileMenu.classList.toggle("hidden");
});

document.getElementById("year").textContent = new Date().getFullYear();
