// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItem = Array.from(document.querySelector(".nav-item"));
const menuBranding = document.querySelector(".menu-branding");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");

    navItem.forEach((item) => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");

    navItem.forEach((item) => item.classList.remove("show"));
    showMenu = false;
  }
}
