const hiddenMenu = document.querySelector(".header__hidden-wrapper");
const header = document.querySelector(".header");
const logo = document.querySelector(".header__logo");
const phone = document.querySelector(".header__icon");

const burgerMenuButton = document.querySelector(".header__menu-burger");

burgerMenuButton.addEventListener("click", function() {
    // togglePopup(popupMenu);
    hiddenMenu.classList.toggle("header__hidden-wrapper_open");
    burgerMenuButton.classList.toggle("header__menu-closed");
    header.classList.toggle("header_dark");
    document.addEventListener("keyup", keyupHandler);
    logo.classList.toggle("header__logo_dark");
    phone.classList.toggle("header__icon_dark");
});

openDevelpMobilePopupButton.addEventListener("click", function() {
    togglePopup(popupDevelopmMobile);
    // togglePopup(popupMenu);
    document.addEventListener("keyup", keyupHandler);
});