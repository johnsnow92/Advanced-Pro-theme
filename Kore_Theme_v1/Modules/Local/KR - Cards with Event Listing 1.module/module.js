$(function(){

  $('.card__nav__wrap a').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('id');
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.card__listing__events .card__item').removeClass('active animate__animated animate__fadeIn');
    $('.card__listing__events .card__item.'+id).addClass('active animate__animated animate__fadeIn');
    
  });
  
});