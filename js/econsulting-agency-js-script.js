jQuery(document).ready(function($){

    jQuery(".js-video-button").modalVideo();

    jQuery('.school-value').counterUp({
        delay: 50,
        time: 1000
    });

    jQuery('.work_slider').slick({
        rtl: econsulting_agency_object.rtl ? true : false,
        infinite: true,
        slidesToShow: 3,
        centerPadding:'200px',
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        arrows: false,
        dots: true,
        autoplay: true,
        touchThreshold:100,
        loop:true,
        responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                centerPadding:'100px',
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                centerPadding:'0px',
            }
        }]
    });

	$.exists = function(selector) {
        return ($(selector).length > 0);
    }

    $('.testi-slider').slick({
        rtl: econsulting_agency_object.rtl ? true : false,
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         autoplay: true,
         speed: 1000,
         rows:0,
         loop:true,
         responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 2
             }
         }, {
             breakpoint: 750,
             settings: {
                 slidesToShow: 1
             }
         }]
     });

});

jQuery(document).on( 'click' , '.econsult-faq-main .panel-title a' , function(){
    jQuery(this).closest( '.panel-group' ).find( '.panel' ).removeClass('active'); // Remove all class at first
    jQuery(this).closest( '.panel' ).addClass( 'active' ); // add class to individual div
});