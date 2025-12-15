$(function() {

  /** 
     * Mobile Nav
     *
     * Hubspot Standard Toggle Menu
     */

  $('.kore-navigation-etana-header .custom-menu-primary').addClass('js-enabled');

  /* Mobile button with three lines icon */
  $('.kore-navigation-etana-header .custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger"><div class="inner"><i class="fas fa-bars"></i></div></div>');

  /* Uncomment for mobile button that says 'MENU' 
        $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger">MENU</div>');
    */

  $('.kore-navigation-etana-header .custom-menu-primary .flyouts .hs-item-has-children > a').after(' <div class="child-trigger"><i class="fas fa-chevron-down"></i></div>');
  $('.kore-navigation-etana-header .mobile-trigger').click(function() {
    $(this).next('.custom-menu-primary .hs-menu-wrapper').slideToggle(250);
    $('.kore-navigation-etana-header .header-button').slideToggle(250);
    $('body').toggleClass('mobile-open');
    $('.kore-navigation-etana-header .child-trigger').removeClass('child-open');
    $('.kore-navigation-etana-header .hs-menu-children-wrapper').slideUp(250);
    return false;
  });

  $('.kore-navigation-etana-header .child-trigger').click(function() {
    $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
    $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
    $(this).next('.hs-menu-children-wrapper').slideToggle(250);
    $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
    $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
    $(this).toggleClass('child-open');
    return false;
  });

});