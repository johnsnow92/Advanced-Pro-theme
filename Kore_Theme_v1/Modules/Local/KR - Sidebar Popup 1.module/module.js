$(document).ready(function(){

  window.addEventListener('message', event => {
    if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
      Cookies.set('mlll_email_subscribe_cookie', 'yes', { expires: 365, path: '/' });
    }
  });

  // check if cookie exist
  if(Cookies.get('mlll_email_subscribe_cookie')) {
    console.log('user already subscribe');
  }
  else {
    setTimeout(function(){
      $.magnificPopup.open({
        items: {
          src: '.sidebar-popup-wrap', // can be a HTML string, jQuery object, or CSS selector
          type: 'inline'
        }
      });
    }, 3000);
    console.log('No cookie found. Display popup subscribe form');
  }

});