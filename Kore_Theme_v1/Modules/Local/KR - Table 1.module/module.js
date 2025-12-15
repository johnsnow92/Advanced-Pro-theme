$(function(){

  // view more featured items
  $('.view-more').on('click', function(){
    $('.matrix-more-features').slideToggle();
  });

  var ctr_1=0;
  var ctr_2=0;  
  
  // for Growth - Annual
  $('.growth .annual').on('click', function(){
    console.log(ctr_1);
    $(this).prev().find('span').removeClass('active');
    $(this).find('span').addClass('active');
    if ( ctr_1 == 0 ){
      var monthly = $(this).parent().next().find('.price-val').text();
      var discount = $(this).parent().find('.discount-value').text();
      var discounted_value = monthly * (1-discount);
      console.log('discounted value: '+discounted_value);
      $(this).parent().next().find('.price-val').text(discounted_value.toFixed());          
      ctr_1=1;
    }
    return false;
  });

  // for Starter - Annual
  $('.starter .annual').on('click', function(){
    console.log(ctr_2);
    $(this).prev().find('span').removeClass('active');
    $(this).find('span').addClass('active');
    if ( ctr_2 == 0 ){
      var monthly = $(this).parent().next().find('.price-val').text();
      var discount = $(this).parent().find('.discount-value').text();
      var discounted_value = monthly * (1-discount);
      console.log('discounted value: '+discounted_value);
      $(this).parent().next().find('.price-val').text(discounted_value.toFixed());          
      ctr_2=1;
    }
    return false;
  });  
  
  // for Growth - Monthly
  $('.growth .price-calc .monthly').on('click', function(){
    ctr_1=0;
    $(this).next().find('span').removeClass('active');
    $(this).find('span').addClass('active');
    var original_monthly_price = $(this).parent().find('.original-monthly-price').text();
    $(this).parent().next().find('.price-val').text(original_monthly_price);
    return false;
  });  

  // for Starter - Monthly
  $('.starter .price-calc .monthly').on('click', function(){
    ctr_2=0;
    $(this).next().find('span').removeClass('active');
    $(this).find('span').addClass('active');
    var original_monthly_price = $(this).parent().find('.original-monthly-price').text();
    $(this).parent().next().find('.price-val').text(original_monthly_price);
    return false;
  });  
  
  // init when on mobile view
  $('.col-view-more').on('click', function(){
    $(this).prev().find('.matrix-more-features').slideToggle();
  });
}); 