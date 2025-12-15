$(function() {

  $( ".kore-lp-testimonial-1 .parent table" ).wrap( "<div class='table-responsive'></div>" );
  
  $( ".kore-lp-testimonial-1 .parent table" ).addClass( "table table-hover table-bordered" );
  
  $( ".kore-lp-testimonial-1 .parent [style]" ).each(function() { 

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

  $('.kore-lp-testimonial-1 .customer-testimonial').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    rows: 0,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='https://cdn2.hubspot.net/hubfs/484997/Kore%20Theme/left-arrow.svg'>",
      nextArrow:"<img class='a-right control-c next slick-next' src='https://info.juicetactics.com/hubfs/Kore%20Theme/right-arrow.svg'>"
  });
  
});