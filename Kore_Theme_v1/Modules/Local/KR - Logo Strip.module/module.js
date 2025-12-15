$(function() {
  
  $('.kore-lp-logo .customer-logos').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    rows: 0,
    responsive: [{
      breakpoint: 1140,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    }]
  });
  
});