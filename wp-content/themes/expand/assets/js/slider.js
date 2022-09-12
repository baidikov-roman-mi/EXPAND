$(document).ready(function () {
    $("#services-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: true
    });

    $("#reviews-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true,
    });
});