function updateSlideImageWIdth() {
  var imgComparisonModules = document.querySelectorAll('.cm_comp_wrp');
  if (imgComparisonModules) {
    imgComparisonModules.forEach(function(module) {
      var getElelment = module.querySelector('.before_after_image_box');
      var getParent = module.querySelector('.cm_comp_content');
      if (getElelment && getParent) {
        var getParentRect = getParent.getBoundingClientRect();
        getElelment.style.width = getParentRect.width+'px';
        getElelment.setAttribute('data-width', getParentRect.width);
      }
    });  
  }
}
updateSlideImageWIdth();
document.addEventListener("DOMContentLoaded",function(){
  updateSlideImageWIdth();
}); 
window.addEventListener("load",function(){
  updateSlideImageWIdth();
});
window.addEventListener("resize", function(){
  updateSlideImageWIdth();
});