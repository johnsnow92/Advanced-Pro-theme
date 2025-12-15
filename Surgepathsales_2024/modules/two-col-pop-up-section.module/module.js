$(document).ready(function () {
  $("#form-btn").click(function (event) {
    event.preventDefault();

    const buttonOffset = $(this).offset().top;
    $('html, body').animate({
      scrollTop: buttonOffset
    }, 0, function() {
      $("#form-back").fadeIn(); 
      $("#form").fadeIn(); 
    });
  });

  $("#form").click(function (event) {
    event.stopPropagation();
  });

  $("#form-back").click(function () {
    $("#form-back").fadeOut(); 
    $("#form").fadeOut();
  });


  $("#btnCloseForm").click(function () {
    $("#form-back").fadeOut(); 
    $("#form").fadeOut(); 
  });
  
  // ==================================
  //   SUBMIT FILE -------------------
  $('#form').on('submit', function (e) {
    e.preventDefault(); 
    var hasBlankField = false;
    $(this).find('input[type="text"], input[type="email"], input[type=tel]').each(function () {
      var fieldValue = $.trim($(this).val());
      if (fieldValue === '') {
        hasBlankField = true;
        return false; 
      }
    });
    if (!hasBlankField) {
      var pdfUrl = "https://6697562.fs1.hubspotusercontent-na1.net/hubfs/6697562/SurgePathSales.pdf";
      window.open(pdfUrl, '_blank');
    } 
  });
});