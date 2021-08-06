import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import beforeAfter from './beforeAfter';

const Myslider = function () {
  SwiperCore.use([Navigation, Pagination]);
  const swiper = new Swiper('.slider__main', {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    centeredSlides: true,
    slidesPerGroup: 1,
    // loop: true,
   
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
    
  });
 
}
export default Myslider;
