function copyMenu(){
  var dpCategory = document.querySelector('.dpt-cat');
  var dptPlace = document.querySelector('.departments');
  dptPlace.innerHTML = dpCategory.innerHTML;

  var mainNav = document.querySelector('.header-nav nav');
  var navPlace = document.querySelector('.off-canvas nav');
  navPlace.innerHTML = mainNav.innerHTML;

  var topNav = document.querySelector('.header-top .wrapper');
  var topPlace = document.querySelector('.off-canvas .thetop-nav')
  topPlace.innerHTML = topNav.innerHTML;

}
copyMenu();