$(function() {
  
  $('.acc-item').on('click', function(){
    let $this = $(this);
    let acc_data = $this.data('acc');
    console.log('acc_data: '+acc_data);
    $this.siblings().removeClass('active');
    $this.toggleClass('active');
    $this.siblings().find('.acc-body').slideUp();
    //$this.siblings().find('.acc-collapse img').toggle();
    $this.find('.acc-body').slideToggle();
    //$this.find('.acc-collapse img').toggle();
    $('.acc-media-col .media-acc').hide();
    $('.acc-media-col .'+acc_data).fadeIn();
  });
});