$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 148
        }, 600);
        return false;
      }
    }
  });
});


$('.header .contact-section>a').attr('href','mailto:sales@dynamics-group.com');

var nav = $('body');
$(window).scroll(function () {
  if ($(this).scrollTop() > 60) {
    nav.addClass('fixheader');
  }
  else {
    nav.removeClass('fixheader');
  }
});