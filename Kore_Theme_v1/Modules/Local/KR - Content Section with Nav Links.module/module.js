$(function(){

  // animate to specific section on click
  $('.steps-nav-list .title h3').on('click', function(e){
    let $this = $(this);
    let item_attr = $this.attr('data-title');
    let r = $('.steps-content-items .step-'+item_attr).offset().top;
    $this.siblings().removeClass('active');

    $(this).addClass('active');
    $('html, body').animate({
      scrollTop: r
    }, 1000);

    return false;  

  });

  // show/hide back to top button
  $(window).scroll(function() {
    let scrollTop = $(this).scrollTop();
    let post_body = $('.steps-content-items').offset().top-50;

    if ( scrollTop >= post_body ){
      $('.back-to-top').fadeIn();
      $('.back-to-top').addClass('active');
    } 
    else{
      $('.back-to-top').fadeOut();
      $('.back-to-top').removeClass('active');
    }
  });

  // back to top section
  $('.back-to-top').on('click', function(e){
    let steps_section = $('.inter-steps-section').offset().top;
    $(this).addClass('active');
    $('html, body').animate({
      scrollTop: steps_section
    }, 1000);
  });


});