$(document).ready(function(){
    $('.preloader').addClass('loaded');
    $('.input input').focus(function(){
        $(this).closest('.input').addClass('focusIn');
    })
    $('.input input').blur(function(){
        if($(this).val().length <=0 ) {
            $(this).closest('.input').removeClass('focusIn');
        }
    })

    $(".menu").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 70,
        threshold: 120,
        speed: 1200,
        currentClass: "act-link"
    });
    $(".winner__numbers").appear(function() {
        $(".winner__num").countTo();
    });
    $(window).on("scroll", function(a) {
        var a = $(document).height();
        var b = $(window).height();
        var c = $(window).scrollTop();
        var d = c / (a - b) * 100;
        $(".wrapper-column__spinner").css({
            width: d + "%"
        });

        if(c > 0) {
            $(".header").addClass('fix');
        } else {
            $(".header").removeClass('fix');
        }
    });
})
