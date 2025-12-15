$(function() {
  
  $('.card__col').on('click', function(){
    var this_ = $(this);
    this_.parent().parent().siblings().find('.card__popup.active').removeClass('active');
    this_.parent().next().addClass('active');
  });
  
  $('.popup__close').on('click', function(){
    $('.card__popup').removeClass('active');
  });
  
  
});