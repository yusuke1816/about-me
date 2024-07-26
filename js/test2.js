const swiper1 = new Swiper(".swiper1", {
  loop: true,
  pagination: {
      el: ".swiper1-pagination",
      clickable: true,
  },
  slidesPerView: 1,
  navigation: {
      nextEl: ".swiper1-button-next",
      prevEl: ".swiper1-button-prev",
  },
  centeredSlides: true,
  spaceBetween: 16,
  breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
      480: {
          slidesPerView: 2,
          spaceBetween: 30,
      },
      640: {
          slidesPerView: 3,
          spaceBetween: 40,
      },
      1280:{
        slidesPerView: 4,
      },
      1480: {
          slidesPerView: 5,
          spaceBetween: 10,
      },
  },
});



const swiper2 = new Swiper(".swiper2", {
  effect: 'cube', // 例: 'cube', 'fade', 'flip', 'coverflow' など
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
      el: ".swiper2-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper2-button-next",
      prevEl: ".swiper2-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  loop: false,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
});




