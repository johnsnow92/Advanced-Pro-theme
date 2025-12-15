$(function() {
  
  $('.tab-item').on('click', function(){    
    let $this = $(this);
    let tab_data = $this.data('tab');
    $('.tab-heading .tab-item').removeClass('active');
    $this.addClass('active');
    $('.tab-body .tab-body-wrap').hide(); 
    $('.tab-media-col .media-acc').hide();
    $('.tab-media-col .media-acc-1').fadeIn();
    $('.tab-body .tab-'+tab_data).fadeIn();    
    $('.tab-acc-item').removeClass('active');
    $('.tab-acc-item .acc-body').slideUp();
  });
  
  $('.tab-acc-item').on('click', function(){
    let $this = $(this);
    let acc_data = $this.data('acc');
    console.log('acc_data: '+acc_data);
    $this.siblings().removeClass('active');
    $this.toggleClass('active');
    $this.siblings().find('.acc-body').slideUp();
    //$this.siblings().find('.acc-collapse img').toggle();
    $this.find('.acc-body').slideToggle();
    //$this.find('.acc-collapse img').toggle();
    $('.tab-media-col .media-acc').hide();
    $('.tab-media-col .'+acc_data).fadeIn();
  });
});