let menuOverlay = document.querySelector('.overlay');
let heroImage = document.querySelector('.logo-hero');

function closeMenu() {
  menuOverlay.style.display = "none";
  menuOverlay.style.zIndex = 0;
  heroImage.style.zIndex = 1;
}

function openMenu() {
  menuOverlay.style.display = "flex";
  menuOverlay.style.zIndex = 1;
  heroImage.style.zIndex = 0;
}
