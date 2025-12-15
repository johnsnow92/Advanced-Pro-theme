$(function() {
  
  $('.cat-item').on('click', function(){
    
    let _this = $(this);
    _this.siblings().find('.cat-content').slideUp();
    _this.find('.cat-content').slideToggle();
    _this.toggleClass('active');
    
  });
  
  $('.filter-dropdown select').on('change', function(){
    let _this = $(this);
    let tag = _this.find(':selected').attr('data-tag');
    
    if ( tag != 'view-all' ){
      $('.fp-category-items .cat-item').hide();
      $('.fp-category-items .cat-item.cat-'+tag).fadeIn();          
    }
    else{
      $('.fp-category-items .cat-item').fadeIn();
    }
    
  });
  
  
});