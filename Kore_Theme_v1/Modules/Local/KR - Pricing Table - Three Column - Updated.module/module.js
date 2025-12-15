$(function(){

  // init matchHeight
  $('.matrix-price-info').matchHeight();
  
  // view more featured items
  $('.view-more').on('click', function(){
    $('.matrix-more-features').slideToggle();
    $(this).toggleClass('active');
  });

  // init when on mobile view
  $('.col-view-more').on('click', function(){
    $(this).prev().find('.matrix-items-wrapper .matrix-more-features').slideToggle();
    $(this).toggleClass('active');
  });
  
  
  // make annual enable on page load by default  
  $('.price-col').each(function(){    
    var monthly_val = $(this).find('.matrix-column-wrapper .matrix-price-info .original-monthly-price').text();
    var discount_val = $(this).find('.matrix-column-wrapper .matrix-price-info .discount-value').text();
    var discounted_val_result = monthly_val * (1-discount_val);
    $(this).find('.matrix-column-wrapper .matrix-price-info .price-val').text(discounted_val_result.toFixed());
    $(this).find('.matrix-column-wrapper a.annual span').addClass('active');    
    console.log('value of discounted: '+discounted_val_result);
    //$(this).find('.matrix-items-wrapper .matrix-features p:first b').text(monthly_interactions_results_final);
    $(this).addClass('annual-active');
  });
  
  
  var ctr_1=0;
  var ctr_2=0;  
  
  /* ===== Annual ===== */
  
  // for pricing2 - Annual    
  $('.pricing2 .annual').on('click', function(){
    var span_active = $('.pricing2 .price-calc a.annual span.active').length;
    console.log('value of span_active: '+span_active);
    if ( span_active == 0 ){
      console.log(ctr_1);
      $(this).prev().find('span').removeClass('active');
      $(this).find('span').addClass('active');
      if ( ctr_1 == 0 ){
        
        $(this).parent().parent().find('.ptext .year').show();
        $(this).parent().parent().find('.ptext .month').hide();
        
        var monthly = $(this).parent().next().find('.price-val').text();
        var discount = $(this).parent().find('.discount-value').text();
        var discounted_value = monthly * (1-discount);
        $(this).parent().next().find('.price-val').text(discounted_value.toFixed());          
        ctr_1=1;
        
        $(this).parent().parent().parent().parent().addClass('annual-active');
        $(this).parent().parent().parent().parent().removeClass('monthly-active');
        
        $(this).find('.matrix-price-info .per-month').show();
          
      }
      return false;
    }
  });
  
  // for pricing3 - Annual    
  $('.pricing3 .annual').on('click', function(){
    var span_active = $('.pricing3 .price-calc a.annual span.active').length;
    console.log('value of span_active: '+span_active);
    if ( span_active == 0 ){
      console.log(ctr_1);
      $(this).prev().find('span').removeClass('active');
      $(this).find('span').addClass('active');
      if ( ctr_1 == 0 ){
        
        $(this).parent().parent().find('.ptext .year').show();
        $(this).parent().parent().find('.ptext .month').hide();
        
        var monthly = $(this).parent().next().find('.price-val').text();
        var discount = $(this).parent().find('.discount-value').text();
        var discounted_value = monthly * (1-discount);
        $(this).parent().next().find('.price-val').text(discounted_value.toFixed());          
        ctr_1=1;
        
        $(this).parent().parent().parent().parent().addClass('annual-active');
        $(this).parent().parent().parent().parent().removeClass('monthly-active');
        
        $(this).find('.matrix-price-info .per-month').show();
          
      }
      return false;
    }
  });  
  
  /* ===== Monthly ===== */
  
  // for pricing2 - Monthly    
  $('.pricing2 .price-calc .monthly').on('click', function(){
    ctr_1=0;
    $(this).next().find('span').removeClass('active');
    $(this).find('span').addClass('active');

    $(this).parent().parent().parent().parent().removeClass('annual-active');
    $(this).parent().parent().parent().parent().addClass('monthly-active');
    
    var original_monthly_price = $(this).parent().find('.original-monthly-price').text();
    $(this).parent().next().find('.price-val').text(original_monthly_price);
    
    $(this).parent().parent().find('.ptext .year').hide();
    $(this).parent().parent().find('.ptext .month').show();    
    $(this).parent().parent().find('.m-price .per-month').hide();    
    return false;
  });    
  
  // for pricing3 - Monthly    
  $('.pricing3 .price-calc .monthly').on('click', function(){
    ctr_1=0;
    $(this).next().find('span').removeClass('active');
    $(this).find('span').addClass('active');

    $(this).parent().parent().parent().parent().removeClass('annual-active');
    $(this).parent().parent().parent().parent().addClass('monthly-active');
    
    var original_monthly_price = $(this).parent().find('.original-monthly-price').text();
    $(this).parent().next().find('.price-val').text(original_monthly_price);
    
    $(this).parent().parent().find('.ptext .year').hide();
    $(this).parent().parent().find('.ptext .month').show();    
    $(this).parent().parent().find('.m-price .per-month').hide();      
    return false;
  });    
  
}); 