//declaration section
const open_menu = document.getElementById("open_menu");
const close_menu = document.querySelectorAll("header ul a");
const navMenu = document.getElementById("menu");
const closeNav = document.getElementById("close_menu");

//opens the navbar when a user clicks on the navbar icon
open_menu.addEventListener("click", () => {
  if (navMenu.classList != "open") {
    navMenu.classList.add("open");

    open_menu.classList.add("open-menu");
    closeNav.classList.remove("close-menu");
  }
}, false);

//close the navigation bar when a user clicks on close icon or on any of the menu
for (let i = 0; i <= close_menu.length; i++) {
  close_menu[i].addEventListener("click", () => {
    if (navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");

      open_menu.classList.remove("open-menu");
      closeNav.classList.add("close-menu");
    }
  }, false);
}

//close nav menu when the user click on anywhere on the page
document.body.addEventListener("click", () => {
    if (navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");

      open_menu.classList.remove("open-menu");
      closeNav.classList.add("close-menu");
    }
  }, false);
}
