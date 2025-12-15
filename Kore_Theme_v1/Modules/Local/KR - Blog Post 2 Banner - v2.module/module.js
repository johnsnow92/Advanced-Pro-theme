 $(function(){

  //remove spaces (nbsp)
  $(".hs_cos_wrapper_type_social_sharing").each(function () {
    var $this = $(this);
    $this.html($this.html().replace(/&nbsp;/g, ''));
  });  

  // blog social share
  // add dynamic id's
  var blog_ctr = 0;
  $('.social-share .hs_cos_wrapper_type_social_sharing > a').each(function(){
    blog_ctr++;
    $(this).attr('id', 'icon-'+blog_ctr);
    if ( blog_ctr == 5 ){
      blog_ctr = 0;
    }
  });  

});