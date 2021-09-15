import Swiper, { EffectFade } from "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
SwiperCore.use([Navigation, Pagination, EffectFade, ]);
const gallerySlider = function () {
  const swiper = new Swiper(".slider__main", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    initialSlide: 2,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      dynamicBullets: true,
    },
    centeredSlidesBounds: true,
  });
};
const reviews = function () {
  const reviews = new Swiper(".reviews__items", {
    slidesPerView: 1,
    effect: "fade",
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
};
export { gallerySlider, reviews };
