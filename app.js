// Recovery of HTML Elements
const headerMobileElement = document.querySelector(".header-mobile");
const navigationMobileELement = document.querySelector(".navigation");
const iconMenuElement = document.querySelector(".header-mobile__icon-menu");
const iconCloseElement = document.querySelector(".header-mobile__icon-close");

console.log(iconCloseElement);

// Function
const handlerMobileMenu = function(e)
{
    headerMobileElement.classList.toggle("header-mobile--menu-open");
    navigationMobileELement.classList.toggle("navigation--hidden");
    iconMenuElement.classList.toggle("header-mobile__icon--hidden");
    iconCloseElement.classList.toggle("header-mobile__icon--hidden");
}

iconMenuElement.addEventListener("click", handlerMobileMenu);
iconCloseElement.addEventListener("click", handlerMobileMenu);