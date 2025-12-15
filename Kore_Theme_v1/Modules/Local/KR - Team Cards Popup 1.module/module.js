$(function() {

  $('.team-item').on('click', function(){

    let $this = $(this);
    let popup_html = $this.find('.team-popup').html();
    $('#popup-display').html('<div class="team-popup">'+popup_html+'</div>');
    $('#popup-display .team-popup').fadeIn();
    $('body').addClass('popup-open');
    $('.popup-overlay').addClass('active');
  });

  $(document).on('click', '.close', function(){
    $('#popup-display .team-popup').hide();
    $('body').removeClass('popup-open');
    $('.popup-overlay').removeClass('active');
  });  

  $('.popup-overlay').on('click', function(){
    $('#popup-display .team-popup').hide();
    $('body').removeClass('popup-open');
    $('.popup-overlay').removeClass('active');
  });  

  // close popup when esc key is press
  $(document).on('keydown', function(event) {
    if (event.key == "Escape") {
      $('#popup-display .team-popup').hide();
      $('body').removeClass('popup-open');
      $('.popup-overlay').removeClass('active');
    }
  });


});