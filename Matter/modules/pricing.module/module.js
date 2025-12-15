// Setup slideUp Function
function slideUp(element, timing) {
  element.style.transitionProperty = 'height, margin, padding';
  element.style.transitionDuration = timing + 'ms';
  element.style.boxSizing = 'border-box';
  element.style.height = element.offsetHeight + 'px';
  element.offsetHeight;
  element.style.overflow = 'hidden';
  element.style.height = 0;
  element.style.paddingTop = 0;
  element.style.paddingBottom = 0;
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  window.setTimeout(function() {
    element.style.display = 'none';
    element.style.removeProperty('height');
    element.style.removeProperty('padding-top');
    element.style.removeProperty('padding-bottom');
    element.style.removeProperty('margin-top');
    element.style.removeProperty('margin-bottom');
    element.style.removeProperty('overflow');
    element.style.removeProperty('transition-duration');
    element.style.removeProperty('transition-property');
  }, timing);
}

// Setup slideDown Function
function slideDown(element, timing) {
  element.style.removeProperty('display');
  var display = window.getComputedStyle(element).display;
  if (display === 'none') {
    display = 'block';
  }
  element.style.display = display;
  var height = element.offsetHeight;
  element.style.overflow = 'hidden';
  element.style.height = 0;
  element.style.paddingTop = 0;
  element.style.paddingBottom = 0;
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  element.offsetHeight;
  element.style.transitionProperty = 'height, margin, padding';
  element.style.transitionDuration = timing + 'ms';
  element.style.height = height + 'px';
  element.style.removeProperty('padding-top');
  element.style.removeProperty('padding-bottom');
  element.style.removeProperty('margin-top');
  element.style.removeProperty('margin-bottom');
  window.setTimeout(function() {
    element.style.removeProperty('height');
    element.style.removeProperty('overflow');
    element.style.removeProperty('transition-duration');
    element.style.removeProperty('transition-property');
  }, timing);
}

// slideToggle function
function toggleFunction(element, timing) {
  var _display = window.getComputedStyle(element, null).display;
  if (_display === 'none') {
    return slideDown(element, timing);
  } else {
    return slideUp(element, timing);
  }
}

// checkbox
var pricingCheckboxes = document.querySelectorAll('.pricing-table-gp .pricing-checbox');
Array.prototype.slice.call(pricingCheckboxes).forEach(function(ele, index) {
  ele.addEventListener('click', function(e) {
    var getElement = ele.parentElement.parentElement.parentElement.nextElementSibling;
    var text1 = getElement.getElementsByClassName("yearly-plan");
    var text2 = getElement.getElementsByClassName("monthly-plan");

    for (var i = 0; i < text1.length; i++) {
      if (ele.checked == true) {
        text1[i].style.display = "block";
        text2[i].style.display = "none";
      } else if (ele.checked == false) {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
      }
    }
  });
});

// expand more features
var pricingFeatureExpandButtons = document.querySelectorAll('.pricing-table-gp .pricing-part .expend-btn');
Array.prototype.slice.call(pricingFeatureExpandButtons).forEach(function(ele, index) {
  ele.addEventListener('click', function(e) {
    ele.classList.toggle('open');
    toggleFunction(ele.previousElementSibling, 400);
  });
});



// tooltip
var tooltips = document.querySelectorAll(".pric-tooltip");

if (tooltips) {
  tooltips.forEach(function(tooltip){
    initPopperTooltip(tooltip.querySelector(".tooltip-icon-price"), tooltip.querySelectorAll(".tooltip-popup-price"), {
      placement: "top",
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, 10]
        }
      }, {
        name: "flip",
        options: {
          fallbackPlacements: ["bottom", "right", "left"]
        }
      }]
    })
  });
}
