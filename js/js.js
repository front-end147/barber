const bodyTag = document.querySelector("body"),
      menu_links = document.querySelector(".menu-links"),
      toggleMenu = document.querySelector(".toggleMenu"),
      menuIcon = document.querySelector(".toggleMenu .menu");

toggleMenu.addEventListener("click", () => {
  bodyTag.classList.toggle("sideMenuIsActive");
  menu_links.classList.toggle("menuIsActive");
  menu_links.classList.contains("menuIsActive") ? menuIcon.src = "./images/close.png" : menuIcon.src = "./images/menu.png";
  toggleMenu.classList.toggle("active");
});
window.addEventListener("scroll", () => {
  bodyTag.classList.remove("sideMenuIsActive");
  menu_links.classList.remove("menuIsActive");
  toggleMenu.classList.remove("active");
  menuIcon.src = "../images/menu.png"
});