

var bodyTag = document.querySelector('body');

function getSafeHeaderMediaUrl(element) {
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

//  //  menu open
var modalElement1 = document.querySelectorAll('.cst-humburger-icon');
if(modalElement1){
  Array.prototype.slice.call(modalElement1).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {
      ele.parentElement.parentElement.classList.toggle('mobile-open');
      bodyTag.classList.toggle('mobile-menu-open');
      e.preventDefault();
    });
  });
}
var modalElement2 = document.querySelectorAll('header.header .mobile-close-icon');
if(modalElement2){
  Array.prototype.slice.call(modalElement2).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {
      ele.parentElement.parentElement.classList.remove('mobile-open');
      bodyTag.classList.toggle('mobile-menu-open');
      e.preventDefault();
    });
  });
}


//  popup open
var modalElement3 = document.querySelectorAll('.btn-section .popup');
if(modalElement3){
  Array.prototype.slice.call(modalElement3).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {
      var getDataId = this.getAttribute('data-id');
      var modalId = document.getElementById(getDataId);
      var video2 = modalId.querySelector('header .videoSrc');
      if (video2) {
        var safeMediaUrl = getSafeHeaderMediaUrl(video2);
        if (safeMediaUrl) {
          video2.setAttribute('src', safeMediaUrl);
        }
        if(safeMediaUrl && video2.classList.contains('videoTag')){
          video2.play();
        }
      } 

      ele.parentElement.classList.toggle('popup-open');
      ele.closest('.header').classList.toggle('popup-open-wrap');
      e.preventDefault();
    });
  });
}


var modalElement4 = document.querySelectorAll('.header .close-icon svg.svg-icon');
if(modalElement4){
  Array.prototype.slice.call(modalElement4).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {
      e.stopPropagation();
      document.querySelector('header .videoSrc') && document.querySelector('header .videoSrc').setAttribute('src','');
      ele.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle('popup-open');
      ele.closest('.header').classList.remove('popup-open-wrap');
      e.preventDefault();
    });
  });
}

var popupWrapper = document.querySelectorAll('.header .csutom-section-popup');
if(popupWrapper){
  Array.prototype.slice.call(popupWrapper).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {
      ele.querySelector('header .videoSrc') && ele.querySelector('.videoSrc').setAttribute('src','');
      ele.parentElement.parentElement.classList.remove('popup-open');
      ele.closest('.header').classList.remove('popup-open-wrap');
      e.preventDefault();
    });
  });
}

var popupContents = document.querySelectorAll('.header .popup-wrapper .inner-popup-container');
if(popupContents){
  Array.prototype.slice.call(popupContents).forEach(function(ele2, index) {
    ele2.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
}


//  Saerch open
var searchElements = document.querySelectorAll('.header .search .search-icon-container svg');
if(searchElements){
  Array.prototype.slice.call(searchElements).forEach(function(searchElement, index) {
    searchElement.addEventListener('click', function(e) {
      document.body.classList.toggle('search-open');
      document.querySelector('input.hs-search-field__input').classList.add('foxcus');
      setTimeout(function(){
        document.querySelector('input.hs-search-field__input').focus();
      },200)
      e.preventDefault();
    });
  });
}

var searchClose = document.querySelectorAll('.header-search-inner .header-search-close');
if(searchClose){
  Array.prototype.slice.call(searchClose).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {
      document.body.classList.remove('search-open');
      e.preventDefault();
    });
  });
}

var searchOverlay = document.querySelectorAll('.header-search-inner');
if(searchClose){
  Array.prototype.slice.call(searchOverlay).forEach(function(ele2, index) {
    ele2.addEventListener('click', function(e) {
      document.body.classList.remove('search-open');
      e.preventDefault();
    });
  });
}

var searchInner = document.querySelectorAll('.header-search-inner .search-suggestion');
if(searchInner){
  Array.prototype.slice.call(searchInner).forEach(function(ele2, index) {
    ele2.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
}





// child menu slidetoggle

(function () {
  // Setup slideUp Function
  function slideUp(element, timing) {
    element.style.transitionProperty = "height, margin, padding";
    element.style.transitionDuration = timing + "ms";
    element.style.boxSizing = "border-box";
    element.style.height = element.offsetHeight + "px";
    element.offsetHeight;
    element.style.overflow = "hidden";
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    window.setTimeout(function () {
      element.style.display = "none";
      element.style.removeProperty("height");
      element.style.removeProperty("padding-top");
      element.style.removeProperty("padding-bottom");
      element.style.removeProperty("margin-top");
      element.style.removeProperty("margin-bottom");
      element.style.removeProperty("overflow");
      element.style.removeProperty("transition-duration");
      element.style.removeProperty("transition-property");
    }, timing);
  }

  // Setup slideDown Function
  function slideDown(element, timing) {
    element.style.removeProperty("display");
    var display = window.getComputedStyle(element).display;
    if (display === "none") {
      display = "block";
    }
    element.style.display = display;
    var height = element.offsetHeight;
    element.style.overflow = "hidden";
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    element.offsetHeight;
    element.style.transitionProperty = "height, margin, padding";
    element.style.transitionDuration = timing + "ms";
    element.style.height = height + "px";
    element.style.removeProperty("padding-top");
    element.style.removeProperty("padding-bottom");
    element.style.removeProperty("margin-top");
    element.style.removeProperty("margin-bottom");
    window.setTimeout(function () {
      element.style.removeProperty("height");
      element.style.removeProperty("overflow");
      element.style.removeProperty("transition-duration");
      element.style.removeProperty("transition-property");
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

  // Menu Toggle Functionality
  var slideTransition = 500;
  var mobileMenuWrapper = document.querySelector(".header__menu--desktop");
  var openMenuClass = "child-open";


  var headerele = document.querySelector('header.header.toggle_all_menu');


  if(headerele){

    var childTrigger = document.querySelectorAll(".toggle_all_menu .mobile-child-trigger");
    Array.prototype.slice.call(childTrigger).forEach(function (ele, index) {
      ele.addEventListener("click", function (e) {
        ele.classList.toggle(openMenuClass);
        ele.parentElement.classList.toggle(openMenuClass);
        toggleFunction(ele.nextElementSibling, slideTransition);
      });
    });
  }

  else{

    var childTrigger = document.querySelectorAll(".mobile-child-trigger");
    Array.prototype.slice.call(childTrigger).forEach(function (ele, index) {
      ele.addEventListener("click", function (e) {
        // filter siblings menu
        var _siblings = Array.prototype.filter.call(
          ele.parentNode.parentNode.children,
          function (sibling) {
            return sibling !== ele;
          }
        );
        // close siblings menu
        Array.prototype.slice.call(_siblings).forEach(function (el, index) {
          if (el.children.length >= 3) {
            el.classList.remove(openMenuClass);
            el.children[1].classList.remove(openMenuClass);
            var _display1 = window.getComputedStyle(el.children[2], null).display;
            _display1 !== "none"
              ? slideUp(el.children[2], slideTransition)
            : null;
          }
        });

        // close child menu
        Array.prototype.filter.call(
          ele.nextElementSibling.children,
          function (child) {
            if (child.children.length >= 10) {
              child.classList.remove(openMenuClass);
              child.children[1].classList.remove(openMenuClass);
              slideUp(child.children[2], slideTransition);
            }
          }
        );

        // open active menu
        var _display = window.getComputedStyle(ele.nextElementSibling, null)
        .display;
        if (_display === "none") {
          ele.classList.toggle(openMenuClass);
          ele.parentElement.classList.toggle(openMenuClass);
          slideDown(ele.nextElementSibling, slideTransition);
        }
      });
    });

  }

})();

// alert section
var alertSectionCloseIcons = document.querySelectorAll('.header > .alert-section .close-icon');
if (alertSectionCloseIcons) {
  Array.prototype.slice.call(alertSectionCloseIcons).forEach(function(alertSectionCloseIcon, index) {
    alertSectionCloseIcon.addEventListener('click', function(e) {
      e.target.parentElement.parentElement.parentElement.parentElement.classList.add('hide_alert_section');
    });
  });
}

//====== search suggestions =======///

var hsSearch = function(_instance) {
  var TYPEAHEAD_LIMIT = 3;
  var KEYS = {
    TAB: 'Tab',
    ESC: 'Esc', // IE11 & Edge 16 value for Escape
    ESCAPE: 'Escape',
    UP: 'Up', // IE11 & Edge 16 value for Arrow Up
    ARROW_UP: 'ArrowUp',
    DOWN: 'Down', // IE11 & Edge 16 value for Arrow Down
    ARROW_DOWN: 'ArrowDown',
  };
  var searchTerm = '',
      searchForm = _instance,
      searchField = _instance.querySelector('.hs-search-field__input'),
      searchResults = _instance.querySelector('.hs-search-field__suggestions'),
      searchOptions = function() {
        var formParams = [];
        var form = _instance.querySelector('form');
        for (
          var i = 0;
          i < form.querySelectorAll('input[type=hidden]').length;
          i++
        ) {
          var e = form.querySelectorAll('input[type=hidden]')[i];
          if (e.name !== 'limit') {
            formParams.push(
              encodeURIComponent(e.name) + '=' + encodeURIComponent(e.value)
            );
          }
        }
        var queryString = formParams.join('&');
        return queryString;
      };

  var debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
          args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait || 200);
      if (callNow) {
        func.apply(context, args);
      }
    };
  },
      emptySearchResults = function() {
        searchResults.innerHTML = '';
        searchField.focus();
        searchForm.classList.remove('hs-search-field--open');
      },
      fillSearchResults = function(response) {
        var items = [];
        items.push(
          "<li id='results-for'>Results for \"" + response.searchTerm + '"</li>'
        );
        response.results.forEach(function(val, index) {
          items.push(
            "<li id='result" +
            index +
            "'><a href='" +
            val.url +
            "'>" +
            val.title +
            '</a></li>'
          );
        });

        emptySearchResults();
        searchResults.innerHTML = items.join('');
        searchForm.classList.add('hs-search-field--open');
      },
      getSearchResults = function() {
        var request = new XMLHttpRequest();
        var requestUrl =
            '/_hcms/search?&term=' +
            encodeURIComponent(searchTerm) +
            '&limit=' +
            encodeURIComponent(TYPEAHEAD_LIMIT) +
            '&autocomplete=true&analytics=true&' +
            searchOptions();

        request.open('GET', requestUrl, true);
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            if (data.total > 0) {
              fillSearchResults(data);
              trapFocus();
            } else {
              emptySearchResults();
            }
          } else {
            console.error('Server reached, error retrieving results.');
          }
        };
        request.onerror = function() {
          console.error('Could not reach the server.');
        };
        request.send();
      },
      trapFocus = function() {
        var tabbable = [];
        tabbable.push(searchField);
        var tabbables = searchResults.getElementsByTagName('A');
        for (var i = 0; i < tabbables.length; i++) {
          tabbable.push(tabbables[i]);
        }
        var firstTabbable = tabbable[0],
            lastTabbable = tabbable[tabbable.length - 1];
        var tabResult = function(e) {
          if (e.target == lastTabbable && !e.shiftKey) {
            e.preventDefault();
            firstTabbable.focus();
          } else if (e.target == firstTabbable && e.shiftKey) {
            e.preventDefault();
            lastTabbable.focus();
          }
        },
            nextResult = function(e) {
              e.preventDefault();
              if (e.target == lastTabbable) {
                firstTabbable.focus();
              } else {
                tabbable.forEach(function(el) {
                  if (el == e.target) {
                    tabbable[tabbable.indexOf(el) + 1].focus();
                  }
                });
              }
            },
            lastResult = function(e) {
              e.preventDefault();
              if (e.target == firstTabbable) {
                lastTabbable.focus();
              } else {
                tabbable.forEach(function(el) {
                  if (el == e.target) {
                    tabbable[tabbable.indexOf(el) - 1].focus();
                  }
                });
              }
            };
        searchForm.addEventListener('keydown', function(e) {
          switch (e.key) {
            case KEYS.TAB:
              tabResult(e);
              break;
            case KEYS.ESC:
            case KEYS.ESCAPE:
              emptySearchResults();
              break;
            case KEYS.UP:
            case KEYS.ARROW_UP:
              lastResult(e);
              break;
            case KEYS.DOWN:
            case KEYS.ARROW_DOWN:
              nextResult(e);
              break;
          }
        });
      },
      isSearchTermPresent = debounce(function() {
        searchTerm = searchField.value;
        if (searchTerm.length > 2) {
          getSearchResults();
        } else if (searchTerm.length == 0) {
          emptySearchResults();
        }
      }, 250),
      init = (function() {
        searchField.addEventListener('input', function(e) {
          if (searchTerm != searchField.value) {
            isSearchTermPresent();
          }
        });
      })();
};

if (
  document.attachEvent
  ? document.readyState === 'complete'
  : document.readyState !== 'loading'
) {
  var searchResults = document.querySelectorAll('.hs-search-field');
  Array.prototype.forEach.call(searchResults, function(el) {
    var hsSearchModule = hsSearch(el);
  });
} else {
  document.addEventListener('DOMContentLoaded', function() {
    var searchResults = document.querySelectorAll('.hs-search-field');
    Array.prototype.forEach.call(searchResults, function(el) {
      var hsSearchModule = hsSearch(el);
    });
  });
}
