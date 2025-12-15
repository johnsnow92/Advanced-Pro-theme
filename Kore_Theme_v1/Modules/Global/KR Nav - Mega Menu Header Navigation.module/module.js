/*global $ */
$(document).ready(function () {

  "use strict";

  $("#search").click(function(){
    $(".mega-menu").toggleClass("hidden");
  });

  $('.menu > ul li:has( > ul) > a').append('<i class="menu-dropdown-icon"></i>');
  //Checks if li has sub (ul) and adds class for toggle icon - just an UI
  $('.menu > ul li:has( > ul)').addClass('has-submenu');

  $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
  //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

  $(".menu").before("<a href=\"#\" class=\"menu-mobile\"></a>");

  //Adds menu-mobile class (for mobile toggle menu) before the normal menu
  //Mobile menu is hidden if width is more then 1139px, but normal menu is displayed
  //Normal menu is hidden if width is below 1140px, and jquery adds mobile menu
  //Done this way so it can be used with wordpress without any trouble

  $(".menu > ul > li").hover(
    function (e) {
      if ($(window).width() > 1139) {
        $(this).children("ul").addClass('open');
        e.preventDefault();
      }
    }, function (e) {
      if ($(window).width() > 1139) {
        $(this).children("ul").removeClass('open');
        e.preventDefault();
      }
    }
  );
  //If width is more than 1139px dropdowns are displayed on hover


  //the following hides the menu when a click is registered outside
  $(document).on('click', function(e){
    if($(e.target).parents('.menu').length === 0)
      $(".menu > ul").removeClass('show-on-mobile');
  });

  $(".menu i.menu-dropdown-icon").click(function(e) {
    //no more overlapping menus
    //hides other children menus when a list item with children menus is clicked
    var thisMenu = $(this).parent().closest("li.has-submenu");
    if ($(window).width() < 1140) {
        thisMenu.children('ul').slideToggle(250);
        $(this).toggleClass('open');
     }
    e.preventDefault();
  });
  //If width is less or equal to 1139px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

  $(".menu-mobile").click(function (e) {
    $(".menu").toggleClass('show-on-mobile').slideToggle(200);
    $(this).toggleClass('open');
    e.preventDefault();
  });
  //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)

});

// jquery drop down menu closing by clicking outside
$(document).click(function (e) {

  if ($(window).width() > 1139) {
    e.stopPropagation();
    var container = $(".main-wrap");

    //check if the clicked area is dropDown or not
    if (container.has(e.target).length === 0) {
      if ($(".mega-menu").hasClass("hidden")) {$(".mega-menu").toggleClass("hidden")};
      
    } else {
     $("#search input").focus();  
    }

  }

});

$(document).keyup(function(e) {
  if (e.keyCode == 27) { // escape key maps to keycode `27`
    if ($(".mega-menu").hasClass("hidden")) {$(".mega-menu").toggleClass("hidden")};
    $("#search input").blur(); 
  }
});