var btn = document.querySelectorAll('.cm_pg_wrp .share-btn');
var parent = document.querySelectorAll('.cm_pg_wrp .social-share-inn');

document.body.addEventListener('click', function() {
  Array.prototype.slice.call(parent).forEach(function(ele, index) {
    ele.classList.remove('open');
  });
});

Array.prototype.slice.call(btn).forEach(function(ele, index) {
  ele.nextElementSibling.addEventListener('click', function(e) {
    e.stopPropagation();  
  });
});

Array.prototype.slice.call(btn).forEach(function(ele, index) {
  ele.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    ele.parentElement.classList.toggle('open');
  });
});

