
document.addEventListener('DOMContentLoaded',function(){
  var teamTrigger = document.querySelectorAll('.cm_team_wrp .team_trigger');
  Array.prototype.slice.call(teamTrigger).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {
      var getId = this.getAttribute('data-id');
      var modalId = document.getElementById(getId);
      document.querySelector('body').classList.add('teamModal_open');
      modalId.classList.add('show');
      setTimeout(function(){
        modalId.classList.add('active_show');
      })
    });
  });

  var teamModalWrap = document.querySelectorAll('.cm_team_wrp .team_popup-modal');
  Array.prototype.slice.call(teamModalWrap).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {

      document.querySelector('body').classList.remove('teamModal_open');
      ele.classList.remove('active_show');
      setTimeout(function(){
        ele.classList.remove('show');
      });
    });
  });

  var teamModalBox = document.querySelectorAll('.cm_team_wrp .modal__box');
  Array.prototype.slice.call(teamModalBox).forEach(function(ele, index) {
    ele.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
});
