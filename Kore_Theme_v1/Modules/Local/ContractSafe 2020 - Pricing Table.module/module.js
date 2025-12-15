$(function() {
  
  $('[data-toggle="collapse"]').click(function() {
    $(this).toggleClass( "active" );
  
  });

  $("#js-contcheckbox").change(function() {
    if(this.checked) {
      $('.js-montlypricing').css('display', 'none');
      $('.js-yearlypricing').css('display', 'flex');
      $('.afterinput').addClass('text-success');
      $('.beforeinput').removeClass('text-success');
    } else {
      $('.js-montlypricing').css('display', 'flex');
      $('.js-yearlypricing').css('display', 'none');
      $('.afterinput').removeClass('text-success');
      $('.beforeinput').addClass('text-success');
    }
  });

});

