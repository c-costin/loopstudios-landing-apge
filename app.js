
const mobileMenu = {
    asideMenuMobileELement: document.querySelector(".aside-menu"),
    linkElements: document.querySelectorAll(".aside-menu__link"),
    iconMenuElement: document.querySelector(".header__icon-menu"),
    iconCloseElement: document.querySelector(".aside-menu__icon-close"),

    init: function()
    {
        mobileMenu.mobileMenuEventClick();
    },

    mobileMenuEventClick: function()
    {
        mobileMenu.iconMenuElement.addEventListener("click", mobileMenu.handleMobileMenuClick);
        mobileMenu.iconCloseElement.addEventListener("click", mobileMenu.handleMobileMenuClick);
        for (const linkElement of mobileMenu.linkElements) {
            linkElement.addEventListener("click", mobileMenu.handleMobileMenuClick);
        }
    },

    handleMobileMenuClick: function()
    {
        mobileMenu.asideMenuMobileELement.classList.toggle("display--hidden");
    },
};

document.addEventListener("DOMContentLoaded", mobileMenu.init);