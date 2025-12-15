var videoContent = document.querySelectorAll('.tabber');
var open_videos = document.querySelectorAll('.video_box');
var open_videos_file = document.querySelectorAll('.video_box video');
var open_videos_ext = document.querySelectorAll('.video-wrap iframe:not(.no_trigger_iframe)');
var open_videos_ext_normalVideo = document.querySelectorAll('.video-wrap iframe.no_trigger_iframe');
var ifram_box = document.querySelectorAll('.iframe_box ');

if(open_videos){
  var close_video_btn = document.querySelectorAll('.tab-title-item');
  Array.prototype.slice.call(close_video_btn).forEach(function(el) {
    el.addEventListener('click', function(e) {
      Array.prototype.slice.call(open_videos).forEach(function(elm) {
        elm.classList.remove('activeVideo');
      });
      Array.prototype.slice.call(ifram_box).forEach(function(fram) {
        fram.classList.remove('activeVideo');
      });
      Array.prototype.slice.call(open_videos_ext).forEach(function(ext) {
        ext.setAttribute("src", "");
      }); 
      Array.prototype.slice.call(open_videos_ext_normalVideo).forEach(function(ext) {
        ext.setAttribute("src", ext.getAttribute("data-src"));
      });
      Array.prototype.slice.call(open_videos_file).forEach(function(vd) {
        vd.load();
      });
    });
  });
}


if(videoContent){
  var iframeTrigger = document.querySelectorAll('.iframe_box .video_trigger');
  Array.prototype.slice.call(iframeTrigger).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {
      var getIframeSrc = ele.nextElementSibling.getAttribute('data-src');
      ele.nextElementSibling.setAttribute('src',getIframeSrc);
      ele.parentNode.parentNode.classList.toggle('activeVideo');

    });
  });


  var videoTrigger = document.querySelectorAll('.video_box .video_trigger');
  Array.prototype.slice.call(videoTrigger).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {
      ele.nextElementSibling.play();
      ele.parentNode.parentNode.classList.toggle('activeVideo');

    });
  });

}