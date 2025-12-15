$(function(){

  //blog listing page
  //initialize slick slider
  $('.slider_post_wrapper').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear'
  });      

  // init matchHeight
  $('.post_item .inner').matchHeight();  

  // show category dropdown on click
  var flag = 1;
  $('.tag_section').on('click', function(){
    flag=0;
    $(this).toggleClass('active');
    $('.tag_section ul').toggleClass('active');
  });    
  $('html').on('click', function(){
    if(flag != 0){
      $('.tag_section ul').removeClass('active');
      $('.tag_section').removeClass('active');
      console.log('value of flag on html click: '+flag);
    }
    else {
      flag = 1;
    }
  });    
  
  // toggle sticky signup form on scroll
  $(window).scroll(function(){  
    var this_ = $(this).scrollTop();
    var footer_section = $('.footer-container-wrapper').offset().top-780;
        
    if ( this_ >= footer_section ){      
      $('.fix_sign_up_section').addClass('active');
      $('.body-container-wrapper').addClass('active');
    }
    
    if (this_ <= (footer_section - 500) ) {
      $('.fix_sign_up_section').removeClass('active');
      $('.body-container-wrapper').removeClass('active');
    }
  });  
  
  // check if page is all listing
  // adding specific class to the body
  var listing_page = $('#all_listing_page').length;  
  if ( listing_page > 0 ){
    $('body').addClass('all_list_pages');
  }
  
  // if post item is less then 9
  // remove those 2 buttons
  var post_item = $('.post_listing .post_item').length;
  if ( post_item < 9 ){
    $('.btn_section').hide();
  }

  /*===== Post Listing =====*/  
  //using ajax to request for getting next blog listing content 
  //without page reload

  //currentPage is the second set of blog post
  //once the load more button is click
  var currentPage = 2;  

  //blog listing container
  var postContainer = $('.recent_posts_wrapper .post_listing'); 

  //on click get ajax request
  $('.recent_posts_wrapper .load_more_btn').on('click', function(){
    var url = window.location.href;
    var split_url = url.split('/');
    var blogpath = split_url[split_url.length-1];
    console.log('Blogpath val: '+blogpath);
    var ajaxUrl = blogpath+"/page/"+currentPage;
    console.log('value of ajaxUrl: ' +ajaxUrl);	

    //initialize ajax request
    $.ajax({
      url: ajaxUrl,
      type: 'GET',
      success: function(data){ 

        // Create a jQuery element of the response
        var page = $(data);

        // Extract the blog posts
        var posts = page.find('.recent_posts_wrapper .post_item').addClass('animated fadeIn');
        console.log('length of get posts:' +posts.length);

        // check if post has a value
        if(posts.length){          
          currentPage += 1;
          posts.each(function(){
            var blogPost = $(this);
            postContainer.append(blogPost);
          });	          
        } else {
          console.log('No data found!!!');
        }

        var items = $(".recent_posts_wrapper .post_listing > .post_item");
        for (var i = 0; i < items.length; i += 3) {
          //items.slice(i, i + 3).wrapAll("<div class='row-fluid'></div>");
        }
        
        //if the length of the posts is less than or equal to 9 ( 9 is the maximum amount of post to be displayed  )
        //that means its gonna be the last page
        //so will then hide the load more button
        if(posts.length < 9){
          $('.recent_posts_wrapper .btn_section').hide();        	
        }  

      },
      error: function(data) {
        //error fetching
        console.log('No more data!!!');
        $('.recent_posts_wrapper .btn_section').hide();
      }
    });

  }); 

  // social share
  var list_url = window.location.href;
  console.log('value of group absolue url: ' +list_url);
  $('.icons.facebook').attr('href', 'http://www.facebook.com/sharer.php?u='+list_url);
  $('.icons.twitter').attr('href', 'http://twitter.com/home?status='+list_url);
  $('.icons.linkedin').attr('href', 'http://www.linkedin.com/shareArticle?url='+list_url);

  // Fix blog list item layout
  var items = $(".recent_posts_wrapper .post_listing > .post_item");
  for (var i = 0; i < items.length; i += 3) {
    //items.slice(i, i + 3).wrapAll("<div class='row-fluid'></div>")
  }

});