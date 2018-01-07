(function () {
  var controlsBlock = document.querySelector(".controls");

  if (controlsBlock) {
    var buttonPrev = controlsBlock.querySelector(".controls__button--prev");
    var buttonNext = controlsBlock.querySelector(".controls__button--next");

    buttonPrev.addEventListener('click', function () {
      window.comment.showPrev();
    });
    buttonNext.addEventListener('click', function () {
      window.comment.showNext();
    });
  }
})();
