// ----- FUNCTIONS LIST ----- //

(function () { // IE NodeList Polyfill //
    if ( typeof NodeList.prototype.forEach === "function" ) return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})();

function changeMenuState(menu, event) {
  switchMenu(menu);
  var button = event.target;
  button.classList.toggle("main-nav__closed");
}

function switchMenu(menu) {
  menu.forEach(function(menuItem) {
    menuItem.classList.toggle("main-nav__list--closed");
  });
}

function notOverModal(event) {
  var cursor = {
    x: event.clientX,
    y: event.clientY
  };
  var curPosition = document.elementFromPoint(cursor.x, cursor.y);

  return curPosition.classList.contains("size-select--show") ? true : false;
}

// ------ END OF FUNCTIONS -------- //

var mainMenu = document.querySelector(".main-nav");
var menuButton = mainMenu.querySelector(".main-nav__toggle-button");
var menuLists = mainMenu.querySelectorAll(".main-nav__list");

mainMenu.classList.add("main-nav--js-opened");
switchMenu(menuLists);

menuButton.classList.add("main-nav__closed");
menuButton.addEventListener("click", function(e) {
  changeMenuState(menuLists, e);
});

var sizeSelectButton = document.querySelectorAll(".size-select__show-btn");
var sizeSelectModal = document.querySelector(".size-select");

sizeSelectButton.forEach(function(button) {
  button.addEventListener("click", function(e) {
    e.preventDefault();
    sizeSelectModal.classList.add("size-select--show");
  });
});

if (sizeSelectModal !== null) {
  sizeSelectModal.addEventListener("click", function(e) {
    if(notOverModal(e)) {
      sizeSelectModal.classList.remove("size-select--show");
    }
  });
}

svg4everybody();
