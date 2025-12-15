function updateHeight() {
  var headerHeight =  $(window). height() - $("header.header").height();
  $(".cm-equipment").css("min-height", headerHeight + "px");
}
updateHeight();
$(window).on("resize", updateHeight);
