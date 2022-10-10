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

// donate amount

(function () {
    const donateAmounts = document.querySelectorAll('.pick_and_feed_block_scale_graf_form_input');
    let donateNumber = document.querySelector('.block_amount_form_number'); 
    const inputs = document.querySelectorAll('input[type=number]');
    //console.log(donateAmounts)
    donateNumber.value = 100
    //console.log(donateNumber.value)

    let arrOfValues = [];                                       
    for (let i = 0; i < donateAmounts.length; i++) {
        arrOfValues.push(donateAmounts[i].value);
    }
    //console.log(arrOfValues)

    Array.from(inputs).forEach(input => {
        input.addEventListener('input', () => {
            if (input.value > +input.max) {
                input.value = +input.max;
            };          
        })
    });
  
    Array.from(inputs).forEach(input => {
        input.addEventListener('input', () => {
            let index = arrOfValues.indexOf(input.value);
            //console.log(index)
            if (index >= 0) {
                donateAmounts[index].checked = true;
            } else if (index === -1) {
                for (let radio of donateAmounts) {
                    radio.checked = false;
                }
            } 
        })
    })

    for (let i = 0; i < donateAmounts.length; i++) {         
        donateAmounts[i].addEventListener('click', () => {
            donateNumber.value = donateAmounts[i].value;
        })
    }
}());

