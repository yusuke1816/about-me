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
        480: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1280: {
            slidesPerView: 4,
        },
        1480: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
});

$(document).ready(function() {
    $('.open-modal').click(function(event) {
        event.preventDefault();
        var imgSrc = $(this).data('img-src');
        var imgAlt = $(this).data('img-alt');

        $('#modalImage').attr('src', imgSrc);
        $('#modalCaption').text(imgAlt);
        $('#customModal').fadeIn();
    });

    $('.close').click(function() {
        $('#customModal').fadeOut();
    });

    $(window).click(function(event) {
        if ($(event.target).is('#customModal')) {
            $('#customModal').fadeOut();
        }
    });
});



    // Open modal when image link is clicked
    $('.open-modal').click(function(event) {
        event.preventDefault();
        var imgSrc = $(this).data('img-src');
        var imgAlt = $(this).data('img-alt');

        $('#modalImage').attr('src', imgSrc);
        $('#modalCaption').text(imgAlt);
        $('#customModal').fadeIn();
    });

    // Close modal when the close button is clicked
    $('.close').click(function() {
        $('#customModal').fadeOut();
    });

    // Close modal when clicking outside the modal content
    $(window).click(function(event) {
        if ($(event.target).is('#customModal')) {
            $('#customModal').fadeOut();
        }
    });
