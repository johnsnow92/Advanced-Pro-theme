$(function() {
  
  var limit = 8;
  var filter = '';
  
  $('.resources-list .resource-box').each(function(a) {
    if (a > limit) {
      $(this).hide();  
    }
  });
  
  $('.resources-filter ul li a').click(function(e) {
    var x = $(this).attr('id');
    filter = '.' + x; 
    limit = 8;
    $('.resources-list .resource-box').hide();
    $('.resources-list .resource-box' + filter).each(function(a) {
      if (a <= limit) {
        $(this).fadeIn();      
      }
    });
    e.preventDefault();
  });
  
  $('.more').click(function(e) {
    limit += 8;
    $('.resources-list .resource-box').hide();
    $('.resources-list .resource-box' + filter).each(function(a) {
      if (a <= limit) {
        $(this).fadeIn();      
      }
    });
    e.preventDefault();
  });
  
  $('.view-all').click(function(e) {
    limit = 100;
    filter = '';
    $('.resources-list .resource-box').fadeIn();
    e.preventDefault();
  });
  
});