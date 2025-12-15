$(function() {

  $('.kore-slider-images .customer-image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    rows: 0,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });

});