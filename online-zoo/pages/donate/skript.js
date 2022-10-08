// burger handler

(function () {
    const burgerItem = document.querySelector('.header_burger_menu');
    const menu = document.querySelector('.header-nav');
    const modal = document.querySelector('.modal_container');
    const menuCloseItem = document.querySelector('.header-nav_close');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-nav-active');
        modal.classList.add('modal_container_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
        modal.classList.remove('modal_container_active');
    });
    modal.addEventListener('click', () => {
        modal.classList.remove('modal_container_active');
        menu.classList.remove('header-nav-active');
    });
}());