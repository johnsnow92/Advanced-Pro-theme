$(function() {

  /** 
     * Mobile Nav
     *
     * Hubspot Standard Toggle Menu
     */

  $('.office-referral-global-header .custom-menu-primary').addClass('js-enabled');

  /* Mobile button with three lines icon */
  $('.office-referral-global-header .custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger"><i class="fas fa-bars"></i></div>');

  /* Uncomment for mobile button that says 'MENU' 
        $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger">MENU</div>');
    */

  $('.office-referral-global-header .custom-menu-primary .flyouts .hs-item-has-children > a').after(' <div class="child-trigger"><i class="fas fa-chevron-down"></i></div>');
  $('.office-referral-global-header .mobile-trigger').click(function() {
    $(this).next('.custom-menu-primary .hs-menu-wrapper').slideToggle(250);
    $('body').toggleClass('mobile-open');
    $('.office-referral-global-header .child-trigger').removeClass('child-open');
    $('.office-referral-global-header .hs-menu-children-wrapper').slideUp(250);
    return false;
  });

  $('.office-referral-global-header .child-trigger').click(function() {
    $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
    $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
    $(this).next('.hs-menu-children-wrapper').slideToggle(250);
    $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
    $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
    $(this).toggleClass('child-open');
    return false;
  });

});