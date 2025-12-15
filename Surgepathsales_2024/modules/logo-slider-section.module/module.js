//logo slider

$('.slider_logo.full-width .half-slide .logos-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 561,
      settings: {
        slidesToShow: 2
      }
    }]
});
// ====================================

$('.slider_logo.half-width .half-slide .logos-slider').slick({
  slidesToShow: 6,
  spaceBetween: 65,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 5,
        spaceBetween: 25,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        spaceBetween: 20,
      }
    },
    {
      breakpoint: 561,
      settings: {
        slidesToShow:2,
        spaceBetween: 15,
      }
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 1.2,
        spaceBetween: 10,
      }
    }]
});


