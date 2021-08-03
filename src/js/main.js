// import Swiper from 'swiper';
'use strict';

window.addEventListener('DOMContentLoaded', function() {

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const headerNav = header.querySelector('.header__nav')
const social = document.querySelector('.social');
const inst = social.lastChild;
const promo = document.querySelector('.promo');
const itemBtns = document.querySelectorAll('.item-price__btn');


itemBtns.forEach(btn => {
 
    btn.addEventListener('click', activeCard);
    function activeCard() {
        
        const content = this.parentNode;
        const priceList = content.querySelector('.item-price__list')
        const mainItem = content.parentNode;
        const itemImg = mainItem.querySelector('.item-price__img');
        const item = content.parentNode;
        const itemDescr = item.querySelector('.item-price__descr');
        if (!this.classList.contains('active')) {
            this.classList.add('active', 'spin-icon');         
            mainItem.classList.add('active');

        } else {
            this.classList.remove('active', 'spin-icon');
           
            mainItem.classList.remove('active');
   
           
        }
        
        
        
     
             

    }
  

   
});


// itemBtns.forEach(btn => {
 
//     btn.addEventListener('click', function() {
//        const content = this.parentNode;
//        const itemImg = content.querySelector('.item-price__img');
//        const item = content.parentNode;
//        const itemDescr = item.querySelector('.item-price__descr');

//         this.classList.toggle('active');
        
//    });
// });

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-opened');
    menu.classList.toggle('menu-active');
});
let screenSize700 = window.matchMedia("(max-width: 576px)");
window.addEventListener('onresize', resize(screenSize700));



function resize (size) {
    if (size.matches) {
        inst.remove();
        const fragment = document.createDocumentFragment();
        const workingTime = document.createElement('div');
        workingTime.classList.add('menu__work-time');
        workingTime.textContent = 'ежедневно с 9:00 до 21:00';
        fragment.appendChild(workingTime);
        fragment.appendChild(inst);
        menu.appendChild(fragment);
        const promoText = document.createElement('div');
        promoText.classList.add('promo__text');
        promoText.innerHTML = 'Компания Double Clean предлагает профессиональные услуги химчистки диванов и&nbsp;другой мягкой мебели с&nbsp;выездом к&nbsp;заказчику на&nbsp;дом или в&nbsp;офис. Мы&nbsp;работаем по&nbsp;всему Киеву';
        promo.appendChild(promoText);
 
        
    }
    
}

});