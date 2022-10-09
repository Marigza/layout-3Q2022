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

    //donateNumber.removeAttribute('value')
    
    donateNumber.value = 100
    console.log(donateNumber.value)

   
    if (donateNumber.value.length > 4) {                    // ограничение длины ввода до 4х символов. пока не работает
        return donateNumber.value.slice(0, 4)
    }

    let arrOfValues = [];                                       // создать массив из значений value
    for (let i = 0; i < donateAmounts.length; i++) {
        arrOfValues.push(donateAmounts[i].value);
    }
    console.log(arrOfValues)

    if (arrOfValues.includes(donateNumber.value)) {             // если в массиве значений есть значение указанное в инпуте
        for (let i = 0; i < donateAmounts.length; i++) {           // !!!надо куда-то воткнуть перезагрузку данных из инпута 
            donateAmounts[i].removeAttribute('checked')
        }
        let index = arrOfValues.indexOf(donateNumber.value);    // то поставить массиву флаг checked
        donateAmounts[index].setAttribute('checked', true)    // пока не работает такое условие (((
    } else if (!arrOfValues.includes(donateNumber.value)) {
        for (let i = 0; i < donateAmounts.length; i++) {
            donateAmounts[i].removeAttribute('checked')
        }
    }
    
    for (let i = 0; i < donateAmounts.length; i++) {            // при нажатии на кружок value этого кружка попадает в поле инпут
        donateAmounts[i].addEventListener('click', () => {
            //console.log(donateAmounts[i].value);               // добавить очистку значения в поле инпут
            donateNumber.value = donateAmounts[i].value;
            console.log('amount = ' + donateNumber.value);
        })
    }
}());

