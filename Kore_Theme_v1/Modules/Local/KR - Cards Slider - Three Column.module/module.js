$(function() {
  
  $('.col3-slides-wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: true,
    pauseOnHover: false,
    rows: 0,
    prevArrow:"<div class='arrow-left prev slick-prev'><img src='https://yembo.ai/hubfs/left-arrow-black.png'></div>",
    nextArrow:"<div class='arrow-right next slick-next'><img src='https://yembo.ai/hubfs/right-arrow-black.png'></div>",
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }]
  });
  
});