
'use strict';
import priceCards from './modules/priceCards'
import generateSlide from './modules/generateSlide';
import Myslider from './modules/slider';  
import beforeAfter from './modules/beforeAfter';



window.addEventListener('DOMContentLoaded', function() {
    priceCards();
    generateSlide();
    Myslider();
    beforeAfter();
    const next = document.querySelector('.swiper-button-next');
    const prev = document.querySelector('.swiper-button-prev');

    next.addEventListener('click', beforeAfter);
    prev.addEventListener('click', beforeAfter);
    
   

    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const header = document.querySelector('.header');
    const headerNav = header.querySelector('.header__nav')
    const social = document.querySelector('.social');
    const inst = social.lastChild;
    const promo = document.querySelector('.promo');
    

let screenSize700 = window.matchMedia(`(max-width: 576px)`);
window.addEventListener('resize', resize(screenSize700));



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
        promoText.innerHTML = 'Компания Double Clean предлагает профессиональные услуги химчистки диванов и&nbsp;другой мягкой мебели с&nbsp;выездом к&nbsp;заказчику на&nbsp;дом или в&nbsp;офис.';
        promo.appendChild(promoText);
 
        
    }
    
}






  


burger.addEventListener('click', () => {
    burger.classList.toggle('burger-opened');
    menu.classList.toggle('menu-active');
});


});