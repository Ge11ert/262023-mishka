(function () {
  var ESC_KEYCODE = 27;

  var sizeSelectButtons = document.querySelectorAll("[class*='show-size']");
  var sizeSelectOverlay = null;
  var sizeSelectModal = null;

  var buttonClickHandler = function (e) {
    e.preventDefault();
    sizeSelectOverlay.classList.add("size-select--show");
  };

  var windowKeydownHandler = function (e) {
    if (e.keyCode === ESC_KEYCODE && sizeSelectOverlay.classList.contains("size-select--show")) {
      sizeSelectOverlay.classList.remove("size-select--show");
    }
  };

  var initOverlay = function () {
    sizeSelectOverlay = document.querySelector(".size-select");
    sizeSelectModal = sizeSelectOverlay.querySelector(".size-select__container");

    sizeSelectButtons.forEach(function (button) {
      button.addEventListener("click", buttonClickHandler);
    });

    sizeSelectModal.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    sizeSelectOverlay.addEventListener("click", function () {
      sizeSelectOverlay.classList.remove("size-select--show");
    });

    window.addEventListener("keydown", windowKeydownHandler);
  };

  if (sizeSelectButtons.length !== 0) {
    initOverlay();
  }
})();
