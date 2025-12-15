$(function(){

  $('.rn-filter-nav a').on('click', function(){

    let $this = $(this);
    let tag = $this.attr('data-tag');

    if( tag != 'show-all' ){
      $('.rn-filter-nav a').removeClass('active');
      console.log('tag: '+tag);
      $('.rn-list-items .rn-item').hide();
      $('.rn-list-items .rn-item.tag-'+tag).fadeIn();
      $this.addClass('active');
    }
    else{
      $('.rn-list-items .rn-item').fadeIn();
      $('.rn-filter-nav a').removeClass('active');
      $('.rn-filter-nav a.show-all').addClass('active');
    }

  });

});