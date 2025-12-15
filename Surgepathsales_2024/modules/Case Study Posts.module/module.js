

$(document).ready(function() {
  $('.truncate, .case-study .main-blog p').each(function() {
    const maxLength = 80; 
    const text = $(this).text();

    if (text.length > maxLength) {
      const truncatedText = text.substring(0, maxLength) + '...';
      $(this).text(truncatedText);
    }
  });
});