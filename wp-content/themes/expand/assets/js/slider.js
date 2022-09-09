$(document).ready(function () {
    $("#services-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: true
    });

    $("#reviews-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop: true,
    });
});