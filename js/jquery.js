jQuery('.owl-testimonial').owlCarousel({
    loop:true,
    nav:false,
    items:1
});

jQuery('.owl-gallery').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    margin:50,
    items:5
});

jQuery(window).scroll(function () {

    var scrollPos = jQuery(this).scrollTop();
    console.log(scrollPos);

    if (scrollPos > 300) {
        jQuery('.nav-container').addClass('sticky');
    } else {
        jQuery('.nav-container').removeClass('sticky');
    }


});