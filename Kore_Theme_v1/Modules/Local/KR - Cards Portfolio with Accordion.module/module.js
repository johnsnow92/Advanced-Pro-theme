$(function() {
  $('.kore-cards-portfolio-accordion .show-form').on('click', function (event){
    
    event.preventDefault();
    var elem = $(this); //writing $(this) every time is bad
    var target = $('div[data-target="'+elem.attr("data-target")+'"]');

    if(elem.hasClass('active')){ 
      //remove from this
      elem.removeClass("active");
      //close box    
      target.slideUp(250);
    } else { //toggle menu when clicking on some other link
      //remove from everywhere
      $('.show-form').removeClass('active');
      //slide every box up
      $('.collapse').slideUp(250);
      //add to this only
      elem.addClass('active'); 
      //slide associated box down
      target.slideDown(250);
    }
  });
});