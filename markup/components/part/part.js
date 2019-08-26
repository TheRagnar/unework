$(document).ready(function(){
    var swiper = new Swiper($('.part__slider .swiper-container'), {
        slidesPerView: 4,
        slidesPerColumn: 2,
        pagination: {
            el: $('.part__slider').find(".swiper-pagination"),
            clickable: true,
        },
    })
})