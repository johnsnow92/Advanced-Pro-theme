var offset = 250;
var duration = 300;


$('.footer-up').click(function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, duration);
  return false;
})