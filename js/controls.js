(function () {
  var sliderButtons = document.querySelectorAll(".controls__button");

  if (sliderButtons) {
    var buttonPrev = sliderButtons.querySelector(".controls__button--prev");
    var buttonNext = sliderButtons.querySelector(".controls__button--next");

    buttonPrev.addEventListener('click', function () {
      window.comment.showPrev();
    });
    buttonNext.addEventListener('click', function () {
      window.comment.showNext();
    });
  }
});
