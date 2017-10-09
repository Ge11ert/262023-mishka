// ----- FUNCTIONS LIST ----- //

function changeMenuState(menu, event) {
  switchMenu(menu);
  var button = event.target;
  button.classList.toggle("main-nav__closed");
}

function switchMenu(menu) {
  for (var i = 0; i < menu.length; i++) {
    var menuItem = menu[i];
    menuItem.classList.toggle("main-nav__list--closed");
  }
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
