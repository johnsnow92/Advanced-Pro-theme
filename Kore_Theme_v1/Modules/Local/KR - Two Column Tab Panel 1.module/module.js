$(document).ready(function(){
  
  console.log('test');
  $('.item-heading ').on('click', function(){
    let _this = $(this);
    let data_item = _this.attr('data-item');
    _this.parent().siblings().find('.item-heading').removeClass('active');
    _this.addClass('active');
    $('.acc-content-item').hide();
    $('.acc-content-body #'+data_item).fadeIn();    
    console.log(data_item);
  });
  
});