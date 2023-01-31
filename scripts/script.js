const headerMenu = document.querySelector(".header_menu");

const h2Border = document.querySelector(".h2_border");

menuIcon.addEventListener("click", () => {
  headerMenu.classList.toggle("header_menu_display");
  h2Border.classList.toggle("hide");

  if (headerMenu.classList.contains("header_menu_display")) {
    menuIcon.src = "images/icon-close.svg";
  } else {
    menuIcon.src = "images/icon-hamburger.svg";
  }
});

window.addEventListener("resize", () => {
  headerMenu.classList.remove("header_menu_display");
  menuIcon.src = "images/icon-hamburger.svg";
});
