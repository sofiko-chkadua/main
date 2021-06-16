//модалки
const popupDevelopm = document.querySelector(".popup_developm");
const popupDevelopmMobile = document.querySelector(".popup_dev");
const popupMenu = document.querySelector(".popup_menu");

// Кнопки открытия
const openDevelpPopupButton = document.querySelector(".header__presa");
const openDevelpMobilePopupButton = document.querySelector(".popup__presa");
const burgerMenuButton = document.querySelector(".header__menu-burger");



// Кнопки закрытия
const developPopupCloseButton = document.querySelector(".popup__closedbutt-devel");
const developPopupMobileCloseButton = document.querySelector(".popup__closedbutt-dev");
const menuPopupClosedButton = document.querySelector(".popup__closedbutt-menu");
const registerPopuplosedButton = document.querySelector(".popup__closed-mar");
const closedContact = document.querySelector(".popup__link-menu-contact");


// подписки открытия
openDevelpPopupButton.addEventListener("click", function() {
    togglePopup(popupDevelopm);
    document.addEventListener("keyup", keyupHandler);
});

openDevelpMobilePopupButton.addEventListener("click", function() {
    togglePopup(popupDevelopmMobile);
    togglePopup(popupMenu);
    document.addEventListener("keyup", keyupHandler);
});

burgerMenuButton.addEventListener("click", function() {
    togglePopup(popupMenu);
    document.addEventListener("keyup", keyupHandler);
});


// подписки закрытия

// closedContact.addEventListener("click", function () {
//     togglePopup(popupMenu);
// });

developPopupCloseButton.addEventListener("click", function() {
    togglePopup(popupDevelopm);
    // togglePopup(popupMenu);
});

developPopupMobileCloseButton.addEventListener("click", function() {
    togglePopup(popupDevelopmMobile);
    togglePopup(popupMenu);

});

menuPopupClosedButton.addEventListener("click", function() {
    togglePopup(popupMenu);
});


// закрытие по оверлэй
popupDevelopm.addEventListener("click", function(e) {
    handleOverlayClick(popupDevelopm, e);
});

popupMenu.addEventListener("click", function(e) {
    handleOverlayClick(popupMenu, e);
});

popupDevelopmMobile.addEventListener("click", function(e) {
    handleOverlayClick(popupDevelopmMobile, e);

});
