$(document).ready(function() {
  $(".main-content .tabbing").click(function() {
    var tab = $(this).attr("data-id");
    $(".main-content .tab-content-main").removeClass("active-tab");
    $(".main-content .right #"+tab).addClass("active-tab");
  });
});


// Slider ============================================================


$(document).ready(function(){
  $('.slider--vertical').slick({
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
  });
});