$(document).ready(function () {

    var $header = $("#header");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 20 && $header.hasClass("default")) {
            $header.removeClass("default").addClass("fixed");
        } else if ($(this).scrollTop() <= 20 && $header.hasClass("fixed")) {
            $header.removeClass("fixed").addClass("default");
        }
    });//scroll

});

jQuery(document).ready(function ($) {
    const $img = $('.logo img');
    $img.data('src-orig', $img.attr('src'));
    $(window).scroll(function () {
        if ($(window).scrollTop() > 20) {
            $img.attr('src', $img.data('dark'));
        } else {
            $img.attr('src', $img.data('src-orig'));
        }
    });
});

jQuery(document).ready(function () {
    jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top - 101;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1500);
        return false;
    });
});
$(document).ready(function () {
    $(".menu-burger").click(function (event) {
        $(".menu-burger,.menu").toggleClass("active");
        $("body").toggleClass("lock")
    })
})