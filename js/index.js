// import { togglePopup, keyupHandler, handleOverlayClick } from './commonoth.js';


// window.addEventListener('resize', () => {
//     console.log('here!!')
//     if ($(window).width() <= 992 && $(window).width() > 678) {
//         const desctopList = document.querySelector('.main')
//         desctopList.remove();
//     }
// });


// if ($(window).width() <= 992 && $(window).width() > 678) {
//     const desctopList = document.querySelector('.main')
//     desctopList.remove();
// }

// хак
// const selectedValueContainer = document.querySelector('.select__value');
// selectedValueContainer.textContent = '—'

// forms
const registrationForm = document.querySelector('.form__body')


//модалки
const popupDevelopm = document.querySelector(".popup_developm");
const popupDevelopmMobile = document.querySelector(".popup_dev");
// const popupDevelopmTouch = document.querySelector(".popup_touch");
// const popupMenu = document.querySelector(".popup_menu");
const popupRegistration = document.querySelector(".popup_registration");


// const popupThanks = document.querySelector(".popup_thanks");
// thanksmodal = ..

// Кнопки открытия
const openDevelpPopupButton = document.querySelector(".header__presa");
const openDevelpMobilePopupButton = document.querySelector(".popup__presa");
// const burgerMenuButton = document.querySelector(".header__menu-burger");
const openRegistrationButton = document.querySelector(".main__card-butt-reg");
// const openDevelpTouchPopupButton = document.querySelector(".main__details_look-touch");
const openRegistrationTouchButton = document.querySelector(".main__card-butt-reg-touch");



// Кнопки закрытия
const developPopupCloseButton = document.querySelector(".popup__closedbutt-devel");
const developPopupMobileCloseButton = document.querySelector(".popup__closedbutt-dev");
// const menuPopupClosedButton = document.querySelector(".popup__closedbutt-menu");
const registerPopuplosedButton = document.querySelector(".popup__closed-mar");
const closedContact = document.querySelector(".popup__link-menu-contact");
// const developPopupTouchCloseButton = document.querySelector(".popup__closedbutt-touch");
const registerPopupTouchlosedButton = document.querySelector(".popup__closedbutt-reg");


// подписки открытия
openDevelpPopupButton.addEventListener("click", function() {
    togglePopup(popupDevelopm);
    document.addEventListener("keyup", keyupHandler);
});

// openDevelpMobilePopupButton.addEventListener("click", function() {
//     togglePopup(popupDevelopmMobile);
//     togglePopup(popupMenu);
//     document.addEventListener("keyup", keyupHandler);
// });

// burgerMenuButton.addEventListener("click", function() {
//     togglePopup(popupMenu);
//     document.addEventListener("keyup", keyupHandler);
// });

openRegistrationButton.addEventListener("click", function() {
    togglePopup(popupRegistration);
    document.addEventListener("keyup", keyupHandler);
});

// openDevelpTouchPopupButton.addEventListener("click", function () {
//     togglePopup(popupDevelopmTouch);
//     document.addEventListener("keyup", keyupHandler);
// });

// openRegistrationTouchButton.addEventListener("click", function () {
//     togglePopup(popupRegTouch);
//     document.addEventListener("keyup", keyupHandler);
// });


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

// menuPopupClosedButton.addEventListener("click", function() {
//     togglePopup(popupMenu);
// });

registerPopuplosedButton.addEventListener("click", function() {
    togglePopup(popupRegistration);
});

// developPopupTouchCloseButton.addEventListener("click", function () {
//     togglePopup(popupDevelopmTouch);
// });

// registerPopupTouchlosedButton.addEventListener("click", function () {
//     togglePopup(popupRegTouch);
// });

// закрытие по оверлэй
popupDevelopm.addEventListener("click", function(e) {
    handleOverlayClick(popupDevelopm, e);
});

// popupMenu.addEventListener("click", function(e) {
//     handleOverlayClick(popupMenu, e);
// });

popupRegistration.addEventListener("click", function(e) {
    handleOverlayClick(popupRegistration, e);
});

popupDevelopmMobile.addEventListener("click", function(e) {
    handleOverlayClick(popupDevelopmMobile, e);

});

// popupDevelopmTouch.addEventListener("click", function (e) {
//     handleOverlayClick(popupDevelopmTouch, e);
// });

// popupRegTouch.addEventListener("click", function (e) {
//     handleOverlayClick(popupRegTouch, e);
// });


// form.addEventListener('submit', () => {
//     const nameInput = document.querySelector('..')
//     const nameSurname = document.querySelector('..')
//     // ....
//     fetch('sendmail.php', {
//         body: JSON.stringify({
//             name: nameInput.value,
//             name: nameInput.value,
//             name: nameInput.value,
//             name: nameInput.value,
//             name: nameInput.value,
//         })
//     })
//     .then(res => res.ok ? res.json() : Promise.reject('erro1!!'))
//     .then(res => {
//         togglePopup(thanks)
//     })
// })


// скрытие инпутов
const registrationInputs = Array.from(registrationForm.querySelectorAll('.form__input'));
const registrationSubmitButton = registrationForm.querySelector('.form__button')
const jobInput = document.querySelector('.form__item_type_job')
const companyInput = document.querySelector('.form__item_type_companyName')
const selectedOptionDiv = document.querySelector(".select-styled")
let inputsToBeValidated = registrationInputs;

let selectOptions = document.querySelectorAll(".select-options__item");
selectOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        selectedOptionDiv.classList.remove('error-red')
        const error = selectedOptionDiv.closest('.form__item').querySelector('.form__error');
        error.classList.add('form__error_hidden')


        selectedOptionDiv.classList.add("selected-red");
        if (isNewAgent(e.target.textContent)) {
            jobInput.classList.add('form__item_hidden')
            companyInput.classList.add('form__item_hidden')
            jobInput.children[1].removeAttribute('required')
            companyInput.children[1].removeAttribute('required')

            excludeInputs(jobInput, companyInput)
        } else {
            jobInput.classList.remove('form__item_hidden')
            companyInput.classList.remove('form__item_hidden')
            jobInput.children[1].setAttribute('required', '')
            companyInput.children[1].setAttribute('required', '')
            includeInputs()
        }

        // checkButtonActivity(inputsToBeValidated)
    })
})

function excludeInputs(...inputsToExclude) {
    inputsToBeValidated = inputsToBeValidated.filter(input => {
        const container = input.closest('.form__item')
        return inputsToExclude.includes(container) ? false : true;
    })
}

function includeInputs() {
    inputsToBeValidated = registrationInputs;
}

// валидация
function checkForm() {
    // e.preventDefault();
    var valid = registrationForm.checkValidity();
    // console.log(valid);

    const error = selectedOptionDiv.closest('.form__item').querySelector('.form__error');
    if(selectedOptionDiv.textContent=='—') {
        selectedOptionDiv.classList.add('error-red')
        error.classList.remove('form__error_hidden')
        valid = false;
    } else {
        selectedOptionDiv.classList.remove('error-red')
        error.classList.add('form__error_hidden')
    }

    return valid
}


registrationInputs.forEach(input => {
    const error = input.closest('.form__item').querySelector('.form__error');
    const border = input.closest('.form__item').querySelector(".form__border");

    if(input.id == 'phone') {
        input.addEventListener('keypress', () => {
            // console.log('input', input)
            // console.log('input.validity.valid', input.validity.valid)
            if (input.validity.valid) {
                error.classList.add('form__error_hidden')
                border.classList.remove('error-red')
            } else {
                error.classList.remove('form__error_hidden')
                border.classList.add('error-red')
            }
        })
    }

    input.addEventListener('input', () => {
        // console.log('input', input)
        // console.log('input.validity.valid', input.validity.valid)
        if (input.validity.valid) {
            error.classList.add('form__error_hidden')
            border.classList.remove('error-red')
        } else {
            error.classList.remove('form__error_hidden')
            border.classList.add('error-red')
        }
    })

    input.addEventListener('invalid', () => {
        error.classList.remove('form__error_hidden');
        border.classList.add('error-red')
    })
})

function isNewAgent(text) {
    return text == "Частный агент";
}
