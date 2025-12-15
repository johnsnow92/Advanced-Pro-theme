$(window).load(function(){

  if ($('.kore-lp-two-column-hero-3 .form .hs-form-field > label > span:empty').length) {
    $('.kore-lp-two-column-hero-3 .form .hs-form-field > label > span:empty').parent().addClass('hide');
  };
  
});

$(function() {

  setTimeout(function() {
    if (location.hash) {
      window.scrollTo(0, 0);
      target = location.hash.split('#');
      smoothScrollTo($('#'+target[1]));
    }
  }, 1);

  $('.kore-lp-two-column-hero-3 a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      smoothScrollTo($(this.hash));
      return false;
    }
  });

  function smoothScrollTo(target) {
    target = target.length ? target : $('[name=' + location.hash.slice(1) +']');

    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 800);
    }
  }

});