var header__nav = document.querySelector(".header__nav");
var menu_icon = document.querySelector(".menu-icon");
var MENU_ICON_ACTIVE_CLASS = "menu-icon-active";
var MENU_ACTIVE_CLASS = "header__nav--open";

document.querySelector(".menu-icon-wrapper").onclick = function() {
  menu_icon.classList.toggle(MENU_ICON_ACTIVE_CLASS);
  header__nav.classList.toggle(MENU_ACTIVE_CLASS);
};;
