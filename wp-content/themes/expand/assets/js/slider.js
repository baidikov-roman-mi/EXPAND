$(document).ready(function () {
    $("#services-carousel").owlCarousel({
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        rewind: true,
        autoplayHoverPause: true,
        responsive: {
            768: {
                nav: true,
                autoplay: false,
            }
        }
    });

    $("#reviews-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true,
    });
});