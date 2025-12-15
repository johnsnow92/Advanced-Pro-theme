$(function(){

  // init matchHeight
  $('.mheight').matchHeight();
  $('.post-item .post-inner').matchHeight();
  
  // add class to body when in topic page
  var url_ = window.location.href;
  if ( url_.indexOf('/tag') > 0 ){
    $('body').addClass('topic-page');
  }

  /*===== Post Listing =====*/  
  //using ajax to request for getting next blog listing content 
  //without page reload

  //currentPage is the second set of blog post
  //once the load more button is click
  var currentPage = 2;  

  //blog listing container
  var postContainer = $('.post-listing'); 

  //on click get ajax request
  $('.btn-loadmore').on('click', function(){
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
        var posts = page.find('.post-item').addClass('animated fadeIn');
        page.find('.post-item.form-item').addClass('hide-post');
        page.find('.post-item.cta-fullwidth').addClass('hide-post');

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

        //var items = $(".post-listing > .post-item");
        //for (var i = 0; i < items.length; i += 3) {
          //items.slice(i, i + 3).wrapAll("<div class='row-fluid item-wrapper'></div>");
        //}

        //if the length of the posts is less than or equal to 9 ( 9 is the maximum amount of post to be displayed  )
        //that means its gonna be the last page
        //so will then hide the load more button
        if(posts.length < 9){
          $('.pagination-section').hide();        	
        }  
        
        // init matchHeight when the set of posts is added to the page
        $('.post-item .post-inner').matchHeight();

      },
      error: function(data) {
        //error fetching
        console.log('No more data!!!');
        $('.pagination-section').hide();
      }
    });
    
  });   
  
  // if post item is less then 9
  // remove those 2 buttons
  var post_item = $('.post-listing .post-item').length;
  if ( post_item < 9 ){
    $('.pagination-section').hide();
  }  

});