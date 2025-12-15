$(function() {

  $('.btn-play').on('click', function(){
    $('.video-popup-overlay').addClass('active');
    $('.popup-video-wrap').fadeIn();
    let video = $('#video');
    video[0].play();
  });

  $('.close').on('click', function(){
    $('.video-popup-overlay').removeClass('active');
    $('.popup-video-wrap').fadeOut();
    let video = $('#video');
    video[0].pause();
  });

  $('.video-popup-overlay').on('click', function(){
    $('.video-popup-overlay').removeClass('active');
    $('.popup-video-wrap').fadeOut();
    let video = $('#video');
    video[0].pause();
  });

  $(document).on('keydown', function(event) {
    if (event.key == "Escape") {
      $('.video-popup-overlay').removeClass('active');
      $('.popup-video-wrap').fadeOut();
      let video = $('#video');
      video[0].pause();
    }
  });

});