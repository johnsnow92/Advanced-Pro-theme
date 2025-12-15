$(function() {

  $(".kore-testimonial-7").closest(".hs_cos_wrapper_type_module").addClass("kore-boldcast-testimonial-wrap");

  $( ".kore-testimonial-7 .parent table" ).wrap( "<div class='table-responsive'></div>" );

  $( ".kore-testimonial-7 .parent table" ).addClass( "table table-hover table-bordered" );

  $( ".kore-testimonial-7 .parent [style]" ).each(function() { 

    if ($(this).css('fontSize') == "72px") {
      $(this).addClass('font-size-72');
      $(this).removeAttr('style');
    } else if ($(this).css('fontSize') == "60px") {
      $(this).addClass('font-size-60');
      $(this).removeAttr('style');
    } else if ($(this).css('fontSize') == "48px") {
      $(this).addClass('font-size-48');
      $(this).removeAttr('style');
    } else if ($(this).css('fontSize') == "36px") {
      $(this).addClass('font-size-36');
      $(this).removeAttr('style');
    } else if ($(this).css('fontSize') == "30px") {
      $(this).addClass('font-size-30');
      $(this).removeAttr('style');
    } else if ($(this).css('fontSize') == "24px") {
      $(this).addClass('font-size-24');
      $(this).removeAttr('style');
    } else if ($(this).css('fontSize') == "20px") {
      $(this).addClass('font-size-20');
      $(this).removeAttr('style');
    } else if ($(this).css('fontSize') == "18px") {
      $(this).addClass('font-size-18');
      $(this).removeAttr('style');
    }

  });

  $('.kore-testimonial-7 .customer-testimonial').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    arrows: false,
    dots: true,
    pauseOnHover: true,
    rows: 0,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='https://cdn2.hubspot.net/hubfs/484997/Kore%20Theme/left-arrow.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='https://info.juicetactics.com/hubfs/Kore%20Theme/right-arrow.svg'>",
    responsive: [{
      breakpoint: 1140,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

});