$(function() {

  $(".kore-blog-post-cta-2 .parent [style]").each(function() { 

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

});