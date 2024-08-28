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
            slidesPerView: 1.1,
            spaceBetween: 10,
        },
        375: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 1.9,
            spaceBetween: 10,
        },
        740: {
            slidesPerView: 2.1,
            spaceBetween: 10,
        },
        840: {
            slidesPerView: 2.3,
            spaceBetween: 10,
        },

        880: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },


        940: {
            slidesPerView: 2.6,
            spaceBetween: 10,
        },

        
        1040: {
            slidesPerView: 3.5,
            spaceBetween: 10,
        },
        1140: {
            slidesPerView: 3.7,
            spaceBetween: 10,
        },
        


        1280: {
            slidesPerView: 3.9,
        },

        
        1480: {
            slidesPerView: 4.7,
            spaceBetween: 10,
        },
        1880: {
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
