(function () {
  // Polyfill for NodeList.prototype.forEach() in IE
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }
  //===================

  // Function for executing code on document ready
  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  // Execute JavaScript on document ready
  domReady(function () {

    var bodyContainer = document.querySelector('body');
    if (bodyContainer) {
      if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        bodyContainer.classList.add('opera');
      } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        bodyContainer.classList.add('chrome');
      } else if (navigator.userAgent.indexOf("Safari") != -1) {
        bodyContainer.classList.add('safari');
      } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        bodyContainer.classList.add('firefox');
      } else if (navigator.userAgent.indexOf("MSIE") != -1 || !!document.documentMode == true) {
        bodyContainer.classList.add('IE');
      } else {
        bodyContainer.classList.add('unknown');
      }
    }

    //button with popup   

    var careerTrigger = document.querySelectorAll('.popupBtn');
    Array.prototype.slice.call(careerTrigger).forEach(function(ele, index) {
      ele.addEventListener('click', function(e) {
        var getId = this.getAttribute('data-id');
        var modalId = document.getElementById(getId);
        //      var videoElement = modalId.children.getElementsByClassName('videoSrc');
        //       console.log(videoElement);
        modalId.classList.add('show');
        setTimeout(function(){
          modalId.classList.add('active_show');
          var video = modalId.querySelector('.videoSrc');
          if (video) {
            var videoSrc = video.getAttribute('data-src');
            video.setAttribute('src', videoSrc);
          }
        });
        e.stopPropagation();
        e.preventDefault();
      });
    });

    var careerModalWrap = document.querySelectorAll('.popup_modal');
    Array.prototype.slice.call(careerModalWrap).forEach(function(ele, index) {
      ele.addEventListener('click', function(e) {
        ele.classList.remove('active_show');
        setTimeout(function(){
          ele.classList.remove('show');
          var video = ele.querySelector('.videoSrc');
          if (video) {
            video.setAttribute('src', '');
          }
        });
      });
    });


    var careerModalBox = document.querySelectorAll('.popup_modal .popup_modal_box_inner');
    Array.prototype.slice.call(careerModalBox).forEach(function(ele, index) {
      ele.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    });

    //=== 
     


  });

})();

var banner = document.querySelector('.simple-banner');
var systemPage = document.querySelector('.system_page_layout');

if (systemPage) {
  if (!banner) {
    document.body.classList.add("no-banner");
  } else{
    document.body.classList.remove("no-banner");
  }
}


//==== 

document.addEventListener('DOMContentLoaded',function(){
  var getEle = document.querySelectorAll('.hs_cos_wrapper_type_rich_text [data-animation]');
  for (let i = 0; i < getEle.length; i++) {
    var getEleAttr = getEle[i].getAttribute('data-animation');
    getEle[i].setAttribute('data-aos',getEleAttr);
  }
});




