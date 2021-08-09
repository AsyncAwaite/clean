import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import beforeAfter from './beforeAfter';

const Myslider = function () {
  SwiperCore.use([Navigation, Pagination]);
  const swiper = new Swiper('.slider__main', {
    slidesPerView: 1,
    spaceBetween: 20,
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    initialSlide: 2,
    slidesPerGroup: 1,
    // loop: true,
   
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {  
      el: '.swiper-pagination',
      type: 'bullets',
      dynamicBullets: true,
    },
    centeredSlidesBounds: true
  
    
  });
 
}
export default Myslider;
