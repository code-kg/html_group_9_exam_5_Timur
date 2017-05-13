$(document).ready(function () {
    var subList = $('.sublist');
    $('.sublist-link').click(function () {
        subList.slideToggle(700).css('background', '#e2534b');

    });
    $('.slider').slick({
        // dots: true,
        // adaptiveHeight: true
        // autoplay: true,
        // autoplaySpeed: 3000
    });
});