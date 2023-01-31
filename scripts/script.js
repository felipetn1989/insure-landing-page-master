const headerMenu = document.querySelector(".header_menu");

const h2Border = document.querySelector(".h2_border");

/* Everytime the user clicks on the menu icon, it toggles appropriate classes on the header menu and the menu icon, to properly display them on mobile devices */

menuIcon.addEventListener("click", () => {
  headerMenu.classList.toggle("header_menu_display");
  h2Border.classList.toggle("hide");

  if (headerMenu.classList.contains("header_menu_display")) {
    menuIcon.src = "images/icon-close.svg";
  } else {
    menuIcon.src = "images/icon-hamburger.svg";
  }
});

/* This resize event listener was added so that the mobile menu doesn't stay open in case some resizes the screen without closing it, which was causing design problems */

window.addEventListener("resize", () => {
  headerMenu.classList.remove("header_menu_display");
  menuIcon.src = "images/icon-hamburger.svg";
});
