function getSafeFooterMediaUrl(element) {
  var candidate = element.getAttribute('data-src');
  if (!candidate) {
    return '';
  }

  try {
    var parsed = new URL(candidate, window.location.href);
    if (parsed.protocol === 'https:' || parsed.origin === window.location.origin) {
      return parsed.href;
    }
  } catch (error) {
    return '';
  }

  return '';
}

//  popup open
var modalElement = document.querySelectorAll('.ftr_btn_item .popup');
if(modalElement){
  Array.prototype.slice.call(modalElement).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {
      var getDataId = this.getAttribute('data-id');
//       console.log(getDataId);
      var modalId = document.getElementById(getDataId);
//       console.log(modalId);
      var video2 = modalId.querySelector('.videoSrc');
//       console.log(video2);
      if (video2) {
        var safeMediaUrl = getSafeFooterMediaUrl(video2);
        if (safeMediaUrl) {
          video2.setAttribute('src', safeMediaUrl);
        }
      }      
      ele.parentElement.classList.toggle('ftr-search-open');
      e.preventDefault();
    });
  });
}

var modalElement2 = document.querySelectorAll('.footer .close-icon.popup-ftr');
if(modalElement2){
  Array.prototype.slice.call(modalElement2).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {
      ele.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove('ftr-search-open');
      e.preventDefault();
    });
  });
}

var popupWrapper = document.querySelectorAll('.footer .custom-wrapper-popup');
if(popupWrapper){
  Array.prototype.slice.call(popupWrapper).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {
      var getVideoTag  = ele.querySelector('.videoSrc');
      if(getVideoTag){
        getVideoTag.setAttribute('src','');
      }
      ele.parentElement.parentElement.classList.remove('ftr-search-open');
      e.preventDefault();
    });
  });
}


var popupInnerWrapper = document.querySelectorAll('.footer .inner-popup-container');
if(popupInnerWrapper){
  Array.prototype.slice.call(popupInnerWrapper).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {
      var getVideoTag  = ele.querySelector('.videoSrc');
      if(getVideoTag){
        getVideoTag.setAttribute('src','');
      }
      //       ele.querySelector('.videoSrc').setAttribute('src','');
      e.stopPropagation();
      e.preventDefault();
    });
  });
}


// back to top
var backToTopButtons = document.querySelectorAll(".back_to_top");

if (backToTopButtons) {
  backToTopButtons.forEach(function(backToTopButton) {
    backToTopButton.addEventListener("click", smoothScrollBackToTop);    
  });
  function smoothScrollBackToTop(e) {
    e.preventDefault();
    var targetPosition = 0;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 750;
    var start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
  };

  window.addEventListener('scroll', function() {
    if (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400) {
      document.body.classList.add('backtotop_show');
    } else {
      document.body.classList.remove('backtotop_show');
    }
  });
}
