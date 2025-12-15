$(function() {
  
  $( ".kore-pricing-table-2 .parent table" ).wrap( "<div class='table-responsive'></div>" );
  
  $( ".kore-pricing-table-2 .parent table" ).addClass( "table table-hover table-bordered" );
  
  $( ".kore-pricing-table-2 .parent [style]" ).each(function() { 

    if ($(this).css('fontSize') == "72px") {
      $(this).addClass('font-size-72');
      $(this).removeAttr('style');
    } else if ($(this).css('fontSize') == "60px") {
      $(this).addClass('font-size-60');
      $(this).removeAttr('style');
    } else if ($(this).css('fontSize') == "48px") {
      $(this).addClass('font-size-48');
      $(this).removeAttr('style');
    } else if ($(this).css('fontSize') == "36px") {
      $(this).addClass('font-size-36');
      $(this).removeAttr('style');
    } else if ($(this).css('fontSize') == "30px") {
      $(this).addClass('font-size-30');
      $(this).removeAttr('style');
    } else if ($(this).css('fontSize') == "24px") {
      $(this).addClass('font-size-24');
      $(this).removeAttr('style');
    } else if ($(this).css('fontSize') == "20px") {
      $(this).addClass('font-size-20');
      $(this).removeAttr('style');
    } else if ($(this).css('fontSize') == "18px") {
      $(this).addClass('font-size-18');
      $(this).removeAttr('style');
    }

  });
  
  setTimeout(function() {
    if (location.hash) {
      window.scrollTo(0, 0);
      target = location.hash.split('#');
      smoothScrollTo($('#'+target[1]));
    }
  }, 1);

  $('.kore-pricing-table-2 a[href*=#]').click(function() {
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