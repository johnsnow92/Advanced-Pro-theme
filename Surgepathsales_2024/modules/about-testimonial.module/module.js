(function($) {
  $('nav a').on('click', function() {
  $('.triangle-container').remove();
    show_content($(this).index());
  });
  
  show_content(0);

  function show_content(index) {
    $('.tabs .content1.visible').removeClass('visible');
    $('.tabs .content1:nth-of-type(' + (index + 1) + ')').addClass('visible');

    // Set the tab to selected
    $('nav a.selected').removeClass('selected');
    $('nav a:nth-of-type(' + (index + 1) + ')').addClass('selected');
    
    // How to remove the arrow and only show it on the selected tab?
  }
})( jQuery ); 


