$(document).ready(function () {
    $("#services-carousel").owlCarousel({
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        rewind: true,
        autoplayHoverPause: true,
        responsive: {
            1024: {
                nav: true,
                autoplay: false,
            }
        }
    });

    $("#reviews-carousel").owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            1024: {
                nav: true,
                autoplay: false,
            }
        }
    });
});