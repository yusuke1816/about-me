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
            slidesPerView: 10,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 10,
            spaceBetween: 40,
        },
        1280:{
          slidesPerView: 10,
        },
        1480: {
            slidesPerView: 10,
            spaceBetween: 10,
        },
    },
  });
  
  
  
  
  
  