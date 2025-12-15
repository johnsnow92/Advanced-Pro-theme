$(function(){

  let numberOfItems = $('.media-list-wrap .post-item').length;
  let limitPerPage = 12;
  $('.media-list-wrap .post-item:gt('+ (limitPerPage - 1) +')').hide();
  //let totalPages = Math.round(numberOfItems / limitPerPage);
  let totalPages = numberOfItems / limitPerPage;

  if ( totalPages % 1 != 0 ){
    totalPages = parseInt(totalPages) + 1;
  }

  let blog_name = '';
  let data_tag = '';

  // to show pagination numbers/button
  function paginationButtons(){
    $('.pagination-list').append('<a href="javascript:void(0)" class="arrow-icon prev-page"><i class="fa fa-angle-left" aria-hidden="true"></i></a>');
    $('.pagination-list').append('<a href="javascript:void(0)" class="active page-num">1</a>');
    console.log('totalPages function: '+totalPages);
    for( let i = 2; i <= totalPages; i++ ){
      $('.pagination-list').append('<a href="javascript:void(0)" class="page-num">' + i + '</a>');
    }    
    $('.pagination-list').append('<a href="javascript:void(0)" class="arrow-icon next-page"><i class="fa fa-angle-right" aria-hidden="true"></i></a>');
  }
  paginationButtons();

  // select filter
  $('.filter-select-wrap select').on('change', function(e){
    let $this = $(this);
    let value = $this.val();

    let selectValue_one = '';
    let selectValue_two = '';

    let selectOne = $('.filter-select-wrap select.filter1').children("option:selected").val();
    if (selectOne != 'show-all'){
      selectValue_one = '.'+selectOne;
      console.log('selectValue_one: '+selectValue_one);
    }

    let selectTwo = $('.filter-select-wrap select.filter2').children("option:selected").val();
    if (selectTwo != 'show-all'){
      selectValue_two = '.type-'+selectTwo;
      console.log('selectValue_two: '+selectValue_two);
    }

    let combined_values = selectValue_one + selectValue_two;

    console.log('Combined values: '+combined_values);


    if ( value == 'show-all' ){
      //$('.media-list-wrap .post-item').fadeIn();
      reset();
      paginationButtons();

    }
    else{

      blog_name = combined_values;
      $('.media-list-wrap .post-item').hide();
      $('.media-list-wrap .post-item'+blog_name).show();

      let numberOfItems = $('.media-list-wrap .post-item'+blog_name).length;
      console.log('Number of items: '+numberOfItems);
      $('.media-list-wrap .post-item'+blog_name+':gt('+ (limitPerPage - 1) +')').hide();
      totalPages = numberOfItems / limitPerPage;
      if ( totalPages % 1 != 0 ){
        totalPages = parseInt(totalPages) + 1;
      }
      console.log('totalPages: '+totalPages);
      $('.pagination-list a').remove();
      paginationButtons();
      data_tag = '';
      $('.topic-lists a.topic-item').removeClass('active');
    }
    
    $('.pagination-list').show();

  });

  // left sidebar tags
  $(document).on('click', '.topic-lists a.topic-item', function(e){
    let $this = $(this);
    $('.topic-lists a.topic-item').removeClass('active');
    $this.addClass('active');
    data_tag = '.tag-'+$this.attr('data-tag');

    $('.media-list-wrap .post-item').hide();
    $('.media-list-wrap .post-item'+data_tag).show();

    console.log('data tag value: '+data_tag);

    let numberOfItems = $('.media-list-wrap .post-item'+data_tag).length;
    console.log('Number of items: '+numberOfItems);
    $('.media-list-wrap .post-item'+data_tag+':gt('+ (limitPerPage - 1) +')').hide();
    totalPages = numberOfItems / limitPerPage;
    if ( totalPages % 1 != 0 ){
      totalPages = parseInt(totalPages) + 1;
    }
    console.log('totalPages: '+totalPages);
    $('.pagination-list a').remove();
    paginationButtons();
    blog_name = '';
    $('.filter-select-wrap select option:selected').prop("selected", false);
    $('.pagination-list').show();

  });  

  // show individual page items per the pagination number
  $(document).on('click', '.pagination-list a.page-num', function(e){
    e.preventDefault();
    let $this = $(this);
    if ( $this.hasClass('active') ){
      return false
    }
    else{
      let currentPage = $this.index();
      $('.pagination-list a.page-num').removeClass('active');
      $this.addClass('active');
      $('.media-list-wrap .post-item').hide();

      let grandTotal = limitPerPage * currentPage;

      for( let i = grandTotal - limitPerPage; i < grandTotal; i++ ){
        $('.media-list-wrap .post-item'+ (blog_name + data_tag) +':eq('+ i +')').show();
      }
      scrollUp();
    }
  });  

  //$('.pagination-list a.next-page').on('click', function(e){
  // next page
  $(document).on('click', '.pagination-list a.next-page', function(e){
    e.preventDefault();
    let currentPage = $('.pagination-list a.page-num.active').index();
    if ( currentPage === totalPages ){
      $('.pagination-list a.next-page').addClass('disabled');
      return false;
    }
    else{
      currentPage++;
      $('.pagination-list a.page-num').removeClass('active');
      $('.media-list-wrap .post-item').hide();

      let grandTotal = limitPerPage * currentPage;

      for( let i = grandTotal - limitPerPage; i < grandTotal; i++ ){
        $('.media-list-wrap .post-item'+ blog_name +':eq('+ i +')').show();
      }
      $('.pagination-list a.page-num:eq('+ (currentPage - 1) +')').addClass('active');
      console.log('blog name: '+blog_name);
      scrollUp();
    }

  });

  // previous page
  $(document).on('click', '.pagination-list a.prev-page', function(e){
    e.preventDefault();
    let currentPage = $('.pagination-list a.page-num.active').index();
    if ( currentPage === 1 ){
      $('.pagination-list a.prev-page').addClass('disabled');
      return false;
    }
    else{
      currentPage--;
      $('.pagination-list a.page-num').removeClass('active');
      $('.media-list-wrap .post-item').hide();

      let grandTotal = limitPerPage * currentPage;

      for( let i = grandTotal - limitPerPage; i < grandTotal; i++ ){
        $('.media-list-wrap .post-item'+ blog_name +':eq('+ i +')').show();
      }
      $('.pagination-list a.page-num:eq('+ (currentPage - 1) +')').addClass('active');
      console.log('blog name: '+blog_name);
      scrollUp();
    }

  });

  // reset filter
  $('.reset-filter').on('click', function(){
    reset();
    paginationButtons();
  });

  function reset(){
    $('.media-list-wrap .post-item').fadeIn();
    blog_name = '';
    data_tag = '';
    $('.filter-select-wrap select option:selected').prop("selected", false);
    $('.topic-lists a.topic-item').removeClass('active');
    $('.pagination-list a').remove();
    numberOfItems = $('.media-list-wrap .post-item').length;
    $('.media-list-wrap .post-item:gt('+ (limitPerPage - 1) +')').hide();
    totalPages = numberOfItems / limitPerPage;
    if ( totalPages % 1 != 0 ){
      totalPages = parseInt(totalPages) + 1;
    }
    $('form #search').val('');
    $('.pagination-list').show();
  }

  function scrollUp(){
    $('html, body').animate({
      scrollTop: $('.media-filter-wrap').offset().top
    }, 900);
    return false;
  }
  
  // internal search
  $('form #search').keyup(function(){
    let $this = $(this);
    let value = $this.val().toLowerCase();
    $('.media-list-wrap .post-item').each(function(){
      let search = $(this).find('.post-body h3').text().toLowerCase();
      if( search.indexOf(value) > -1 ){
        $(this).fadeIn();    
      }
      else{
        $(this).hide();  
      }
    });
    $('.pagination-list').hide();
  });


});