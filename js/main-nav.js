(function () {
  var mainMenu = document.querySelector(".main-nav");
  var menuButton = mainMenu.querySelector(".main-nav__toggle-button");
  var menuLists = mainMenu.querySelectorAll(".main-nav__list");

  var toggleMenuVisibility = function (navLists) {
    navLists.forEach(function (navListItem) {
      navListItem.classList.toggle("main-nav__list--closed");
    });
  };

  var menuButtonClickHandler = function () {
    toggleMenuVisibility(menuLists);
    menuButton.classList.toggle("main-nav__toggle-button--closed-state");
  };

  mainMenu.classList.add("main-nav--js-enabled");
  toggleMenuVisibility(menuLists);

  menuButton.classList.add("main-nav__toggle-button--show");
  menuButton.classList.add("main-nav__toggle-button--closed-state");
  menuButton.addEventListener("click", menuButtonClickHandler);
})();
