var getBanner = document.querySelector('.bnr_wrp.fullheight');
if(getBanner){
  var headerDiv =  document.querySelector('header.header') ;
  if(headerDiv){
    function updateHeight(){
      var headerHeight =  headerDiv.offsetHeight ;
      getBanner.style.height = 'calc(100vh - '+headerHeight+'px)'
    }

    document.addEventListener('DOMContentLoaded', function(){
      updateHeight()
    })

    window.addEventListener('resize', function(){
      updateHeight()
    })
    var closeIcon = document.querySelector('.alert-section .close-icon');

    if(closeIcon){
      closeIcon.addEventListener('click', function(){
        setTimeout(function(){
          updateHeight()
        },101);
      })
    }
  }

  if(!headerDiv){
    getBanner.classList.add('noHeaderBanner')
  }

}

