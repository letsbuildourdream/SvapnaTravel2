$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 8,
        loop: true,
        nav: true,
        autoplay: true,
    });
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.scrollup').show();
    } else {
        $('.scrollup').hide();
    }
});
$(document).ready(function() {

    $(".filter-button").click(function() {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('2000');
        } else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('5000');
            $('.filter').filter('.' + value).show('5000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});