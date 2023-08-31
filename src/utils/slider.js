import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const resultSlider = new Swiper('#result__slider', {
  // Опции Swiper
  modules: [Pagination],
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Делает точки пагинации кликабельными
  },
  loop: true,
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 5000,
  },
});
