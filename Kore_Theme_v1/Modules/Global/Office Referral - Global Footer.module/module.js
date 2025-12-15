$(function() {
  //$(".ea-systems-sticky-subscribe").closest(".row-fluid-wrapper").addClass("ea-systems-sticky-subscribe-sticky");
});

$(window).scroll(function(){  
  var this_ = $(this).scrollTop();
  var footer_section = $('.office-referral-global-footer').offset().top-780;

  if ( this_ >= footer_section ){      
    $('.ea-systems-sticky-subscribe').addClass('active');
    $('.body-container-wrapper').addClass('active');
  }

  if (this_ <= (footer_section - 300) ) {
    $('.ea-systems-sticky-subscribe').removeClass('active');
    $('.body-container-wrapper').removeClass('active');
  }
});  
