$(function(){

  setTimeout(function(){
    $('.header-icon-wrapper').removeClass('header-hide');
  }, 1100);

  // sticky header icon bar
  var header_height = $('.icon-bar-wrap.icon-bar-desktop').outerHeight();
  $('.header-icon-wrapper').height(header_height);


  $(window).on('resize', function(){
    var windowWidth = $(window).width();
    if ( ( windowWidth >= 767) ){
      var header_height = $('.icon-bar-wrap.icon-bar-desktop').outerHeight();
      $('.header-icon-wrapper').height(header_height);
    }
  });

  $(window).scroll(function() {
    var this_ = $(this).scrollTop();
    var top_header_height = $('.header-wrapper-inner').outerHeight();
    if ( this_ > top_header_height ){
      $('.header-icon-bar').addClass('sticky');
    }      
    else{
      $('.header-icon-bar').removeClass('sticky');    
    }
  });

  var windowWidth = $(window).width();

  $(window).on('resize', function(){
    var windowWidth = $(window).width();
    if ( ( windowWidth <= 767) ){
      $('.icon-bar-wrap.icon-bar-mobile .header-icon-bar__btn-wrap').remove();
    }
  });

  if ( ( windowWidth <= 767) ){
    $('.icon-bar-wrap.icon-bar-mobile .header-icon-bar__btn-wrap').remove();
  }


  // mobile header icon slider
  var window_width = $(window).width(); 

  function slickMobile(){
    $('.icon-bar-wrap.icon-bar-mobile').slick({
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            pauseOnHover: false,
            rows: 0,
            prevArrow:"<div class='img-arrow-wrap left-arrow'><img class='a-left control-c prev slick-prev' src='https://cdn2.hubspot.net/hubfs/484997/Kore%20Theme/left-arrow.svg'></div>",
            nextArrow:"<div class='img-arrow-wrap right-arrow'><img class='a-right control-c next slick-next' src='https://info.juicetactics.com/hubfs/Kore%20Theme/right-arrow.svg'></div>"
          }
        }]
    });
  }

  var flag = 0;
  var target = $('.icon-bar-wrap.icon-bar-mobile');
  $(window).on('resize', function(){
    var windowWidth = $(window).width();
    if ( ( windowWidth <= 767) && !target.hasClass('slick-initialized') ){
      slickMobile();      
    }
  });

  if ( ( windowWidth <= 767) && !target.hasClass('slick-initialized') ){
    slickMobile();
  }  


  // override anchor tags that goes to new tab
  $('.icon-item a.icon-link').click(function(event){
    event.preventDefault();
    window.location = $(this).attr('href');
  });

});