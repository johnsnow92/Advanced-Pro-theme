$(function(){
  var count_hubdb_showmore_clicks = 0;
 
  $("body").on('click','.load-more-hubdb', function(){
      var link = $(".load-more-hubdb").attr("href");
      var active_page = $(".a-paginate.page.active").attr("href");
      var last_page = $(".a-paginate.page").last().attr("href");
    
      var total_pages = $(".a-paginate.page").length;
      var current_page = ($(".a-paginate.page.active").index() == 0)?1:$(".a-paginate.page.active").index();
      var pageCount_left = total_pages - current_page;
    
      $.ajax({
        url: link,
        success: function(result){
          var list = $( result ).find(".listing-html").html();
          var show_more = $(result ).find(".load-more-hubdb").attr("href");
          $(".listing-html").append(list);
          $(".load-more-hubdb").attr("href", show_more);
          $('.a-paginate').hide();
        }
      });
    
    count_hubdb_showmore_clicks += 1;
    $(this).attr("data-count",count_hubdb_showmore_clicks);
    if (count_hubdb_showmore_clicks == pageCount_left){
        $(this).hide();
     }
  });
});