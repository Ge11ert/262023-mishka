// ----- FUNCTIONS LIST ----- //

(function () { // IE NodeList Polyfill //
  if ( typeof NodeList.prototype.forEach === "function" ) return false;
  NodeList.prototype.forEach = Array.prototype.forEach;
})();

function changeMenuState(menu, event) {
  switchMenu(menu);
  var button = event.target;
  button.classList.toggle("main-nav__toggle-button--closed");
}

function switchMenu(menu) {
  menu.forEach(function(menuItem) {
    menuItem.classList.toggle("main-nav__list--closed");
  });
}

// ------ END OF FUNCTIONS -------- //

var mainMenu = document.querySelector(".main-nav");
var menuButton = mainMenu.querySelector(".main-nav__toggle-button");
var menuLists = mainMenu.querySelectorAll(".main-nav__list");

mainMenu.classList.add("main-nav--js-opened");
switchMenu(menuLists);

menuButton.classList.add("main-nav__toggle-button--closed");
menuButton.addEventListener("click", function(e) {
  changeMenuState(menuLists, e);
});

var sizeSelectButton = document.querySelectorAll("[class*='show-size']");
var sizeSelectOverlay = null, sizeSelectModal = null;

if (sizeSelectButton.length != 0) {
  sizeSelectOverlay = document.querySelector(".size-select");
  sizeSelectModal = sizeSelectOverlay.querySelector(".size-select__container");

  sizeSelectButton.forEach(function(button) {
    button.addEventListener("click", function(e) {
      e.preventDefault();
      sizeSelectOverlay.classList.add("size-select--show");
    });
  });
}

if (sizeSelectOverlay !== null) {
  sizeSelectModal.addEventListener("click", function(e) {
    e.stopPropagation();
  });
  sizeSelectOverlay.addEventListener("click", function(e) {
    sizeSelectOverlay.classList.remove("size-select--show");
  });
  window.addEventListener("keydown", function(e) {
    if (e.keyCode === 27 && sizeSelectOverlay.classList.contains("size-select--show")) {
      sizeSelectOverlay.classList.remove("size-select--show");
    }
  });
}

svg4everybody();
