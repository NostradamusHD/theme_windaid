import Swiper from "swiper"

const sliderHeader = new Swiper('#header-slider', {
  loop: true,
  autoplay:{
    delay: 5000,
    reverseDirection: false
  },
  speed: 1500,
  effect: 'carousel',
})

const sliderBrands = new Swiper('#brands-slider', {
  loop: true,
  autoplay:{
    delay: 2000,
    reverseDirection: false
  },
  speed: 1500,
  slidesPerView: 2,
  breakpoints: {
    720:{
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1024:{
      slidesPerView: 6,
      spaceBetween: 50,
    }
  }
});
