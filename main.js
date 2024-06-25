// document.getElementsByClassName(".discribe").animate(
//   [
//     // кадры
//     { width: 0 },
//     { width: 100% },
//   ],
//   {
//     // настройки продолжительности
//     duration: 1000,
//   },
// );

const imageSlider = new Swiper('.image-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  autoplay: {
    delay: 4500,
    stopOnLastSlide: true,
    disableOnInteraction: true,
  },
  speed: 1500,
  effect: 'fade',
  crossFade: true,
});


const textSlider = new Swiper('.text-slider', {
  slidesPerView: 1,
  effect: 'slide'
});

imageSlider.controller.control = textSlider;
textSlider.controller.control = imageSlider;

