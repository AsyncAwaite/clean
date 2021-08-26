"use strict";
import priceCards from "./modules/priceCards";
import { gallerySlider, reviews } from "./modules/slider";
import Сomparison from "./modules/Сomparison";
import Form from "./modules/forms";
import AOS from "aos";



window.addEventListener("DOMContentLoaded", function () {
  priceCards();
  reviews();
  gallerySlider();
  const reviewsСomparison = new Сomparison({
    parent: ".reviews__foto",
  });

  const slideСomparison = new Сomparison({
    parent: ".slide",
  });

  
  reviewsСomparison.init();
  slideСomparison.init();
  new Form('form').init();

  const body = document.querySelector('body');
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const header = document.querySelector(".header");
  const headerNav = header.querySelector(".header__nav");
  const social = document.querySelector(".social");
  const inst = social.lastChild;
  const promo = document.querySelector(".promo");

  let screenSize700 = window.matchMedia(`(max-width: 576px)`);
  window.addEventListener("resize", resize(screenSize700));

  function resize(size) {
    if (size.matches) {
      inst.remove();
      const fragment = document.createDocumentFragment();
      const workingTime = document.createElement("div");
      workingTime.classList.add("menu__work-time");
      workingTime.textContent = "ежедневно с 9:00 до 21:00";
      fragment.appendChild(workingTime);
      fragment.appendChild(inst);
      menu.appendChild(fragment);
      const promoText = document.createElement("div");
      promoText.classList.add("promo__text");
      promoText.innerHTML =
        "Компания CHISTO Panda предлагает профессиональные услуги химчистки диванов и&nbsp;другой мягкой мебели с&nbsp;выездом к&nbsp;заказчику на&nbsp;дом или в&nbsp;офис.";
      promo.appendChild(promoText);
    }
  }

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger-opened");
    menu.classList.toggle("menu-active");
    body.classList.toggle('active')

  });
  AOS.init({
    duration: 1200,
  });
});
