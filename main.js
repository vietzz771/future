// Toggle mobile menu
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const overlay = document.getElementById("overlay");
const body = document.body;

mobileMenuButton.addEventListener("click", () => {
  const isExpanded = mobileMenuButton.getAttribute("aria-expanded") === "true";
  mobileMenuButton.setAttribute("aria-expanded", !isExpanded);
  mobileMenu.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  if (!isExpanded) {
    body.classList.add("overflow-hidden");
  } else {
    body.classList.remove("overflow-hidden");
  }
  mobileMenu.classList.toggle("show");
  overlay.classList.toggle("overlay");
});

document.getElementById("year").textContent = new Date().getFullYear();
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("nav-scroll");
  } else {
    navbar.classList.remove("nav-scroll");
  }
});
