document.addEventListener('DOMContentLoaded',function(){
  var careerTrigger = document.querySelectorAll('.read_trigger');
  Array.prototype.slice.call(careerTrigger).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {
      var getId = this.getAttribute('data-id');
      var modalId = document.getElementById(getId);
      modalId.classList.add('show');
      setTimeout(function(){
        modalId.classList.add('active_show');
      })
    });
  });

  var careerModalWrap = document.querySelectorAll('.career_popup');
  Array.prototype.slice.call(careerModalWrap).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {
      ele.classList.remove('active_show');
      setTimeout(function(){
        ele.classList.remove('show');
      });
    });
  });


  var careerModalBox = document.querySelectorAll('.career_popup .inner_row');
  Array.prototype.slice.call(careerModalBox).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });

})
