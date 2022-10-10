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

// testimonials popup

(function () {
    const modal = document.querySelector('.modal_container');
    const feedbackCloseItem = document.querySelector('.testimonials_feedbacks_item_close');
    const feedbacks = document.querySelectorAll('.testimonials_feedbacks_item');

    if (window.innerWidth <= 645) {
        for (let i = 0; i < feedbacks.length; i += 1) {
            feedbacks[i].addEventListener('click', () => {
                feedbacks[i].classList.add('testimonials_feedbacks_item_active');
                modal.classList.add('modal_container_active');
                feedbackCloseItem.style.visibility = "visible";
            }); 
            modal.addEventListener('click', () => {
                modal.classList.remove('modal_container_active');
                feedbacks[i].classList.remove('testimonials_feedbacks_item_active');
                feedbackCloseItem.style.visibility = "hidden";
            });
            feedbackCloseItem.addEventListener('click', () => {
                modal.classList.remove('modal_container_active');
                feedbacks[i].classList.remove('testimonials_feedbacks_item_active');
                feedbackCloseItem.style.visibility = "hidden";
            });
        }
    }
}());

// testimonials slider

(function () {
    const testimonialsTrack = document.querySelector('.testimonials_feedbacks_track');
    const testimonialsThumb = document.querySelector('input[type=range]');
    let newValue

    function thumbPosition() {
        newValue = testimonialsThumb.value
        let moveSize
        if (window.innerWidth > 1200) {
            moveSize = newValue * 297;
        } else if (window.innerWidth >= 645 && window.innerWidth <= 1200) {
            moveSize = newValue * 323;
        } else if (window.innerWidth < 645) {
            moveSize = newValue * 0;
        }
        testimonialsTrack.style.left = "-" + moveSize + "px"
    }

    testimonialsThumb.addEventListener('click', thumbPosition);
}());
