window.addEventListener('message', event => {
   if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
       $('.kr-blog-post-2-cta-topic-list .legal-consent-container').insertAfter('.kr-blog-post-2-cta-topic-list .form .hs_submit');
   }
});