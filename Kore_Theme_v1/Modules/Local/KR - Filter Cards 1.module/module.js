$(function() {

  // filter tags
  let count = 0;
  let counter_all = 0;
  let ctr = 1;
  $('.filter-lists span.filter-item').on('click', function(){
    count++;
    let _this = $(this);
    let tag = _this.attr('data-tag');
    _this.siblings().removeClass('active');
    _this.addClass('active');
    
    if ( tag != 'all' ){
      $('.kr__col3__card__lists .card__item').hide();
      $('.kr__col3__card__lists .card__item.tag-'+tag).fadeIn();          
    }
    else{
      $('.kr__col3__card__lists .card__item').fadeIn();
    }

    if ( count == 1 ){          
      $('.kr__col3__card__lists').addClass('filter_active');
      $('.filter-view-more').addClass('remove-div');
      $('.kr__col3__card__lists .card__item').unwrap();
    }
    
    counter_all = 0;

  });
  
  $('.filter-lists span#filter-all').on('click', function(){
    counter_all++;
    if ( counter_all == 1 ){        
      $('.kr__col3__card__lists').removeClass('filter_active');
      $('.filter-view-more').removeClass('remove-div');
      wrapAll();
      $('.kr__col3__card__lists .card__item').fadeIn();
      $('.filter-lists .filter-item').removeClass('active');
      $(this).addClass('active');
      $('.filter-view-more').fadeIn();
    }
    count = 0;
    ctr = 1;
  });

  function wrapAll(){
    // group cards by 6 and wrap with a div
    let counter = 0;
    let card_item_length = $('.kr__col3__card__lists .card__item');
    for(let i = 0; i < card_item_length.length; i+=6) {
      counter++;
      card_item_length.slice(i, i+6).wrapAll('<div class="card-item-wrap card-wrap-'+counter+'"></div>');
    }
    
    $('.card-item-wrap').hide();
    $('.card-item-wrap:first').fadeIn();
    $('.card-item-wrap:first').addClass('active');
    
  }
  
  wrapAll();


  // show card items on click of view more
  $('.filter-view-more span').on('click', function(){
    ctr++;
    let _this = $(this);
    let card_wrap_length = $('.card-item-wrap').length;
    let last_div = _this.parent().prev().find('.card-item-wrap:last');
    if( ctr <= card_wrap_length ){
      _this.parent().prev().find('.card-item-wrap.card-wrap-'+ctr).addClass('active').fadeIn();
    }
    else{
      console.log('not showing more');
      console.log('ctr '+ctr);
    }

    // remove view more button when last
    if ( ctr == card_wrap_length ){
      $('.filter-view-more').hide();
    }
    
    console.log('view more click');

  });

});