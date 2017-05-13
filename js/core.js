$(document).ready(function () {

    $('#menu-btn').click(function(){
        $('.menu').slideToggle(700);
        if ($(this).hasClass('not-active')) {
            $(this).addClass('is-active').removeClass('not-active');
        }else{
            setTimeout(function(){
                $('.is-active').addClass('not-active').removeClass('is-active')
            },600)
        }
    });

    var subList = $('.sublist');
    $('.sublist-link').click(function () {
        subList.slideToggle(700).css('background', '#e2534b');

    });
    $('.slider').slick({
        dots: true,
        adaptiveHeight: true
        // autoplay: true,
        // autoplaySpeed: 3000
    });
});