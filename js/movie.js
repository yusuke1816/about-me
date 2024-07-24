const swiper1 = new Swiper(".swiper1", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20, // Default space between slides

    breakpoints: {
        320: {
            spaceBetween: 10, // Adjusted space for smaller screens
        },
        640: {
            spaceBetween: 30, // Adjusted space for medium screens
        },
        1280: {
            spaceBetween: 40, // Adjusted space for larger screens
        },
    },
});
