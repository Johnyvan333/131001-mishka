'use strict';

var mainNav = document.getElementById('mainNav');
var navMobItem = mainNav.querySelectorAll('.main-nav__mob');
var navButton = mainNav.querySelector('.nav-button');
var navButtonClose = navButton.querySelector('.nav-button__close-svg');
var navButtonOpen = navButton.querySelector('.nav-button__open-svg');

var closeMenu = function() {
  for (var i = 0; i < navMobItem.length; i++) {
    navMobItem[i].classList.add('main-nav__closed')
  };
  navButtonOpen.classList.add('main-nav__closed');
  navButtonClose.classList.remove('main-nav__closed');
};

var openMenu = function() {
  for (var i = 0; i < navMobItem.length; i++) {
    navMobItem[i].classList.remove('main-nav__closed')
  };
  navButtonOpen.classList.remove('main-nav__closed');
  navButtonClose.classList.add('main-nav__closed');
}

closeMenu();

navButton.addEventListener('click', function() {
  if (navButtonOpen.classList.contains('main-nav__closed')) {
    openMenu();
  } else {
    closeMenu();
  }
})
