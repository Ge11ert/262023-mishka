(function () {
  var comments = [
    {
      text: "Я молодая мама, но всё равно фотографии не набирали и близко такого количества лайков, " +
      "как у популярных инстамамочек. В отчаянии, я накупила аксессуаров и игрушек в Мишке, и мои фотографии " +
      "сразу стали более стильными, а также набирают больше лайков!",
      name: "Анастасия Красильникова",
      tag: "@misssssiskras"
    },
    {
      text: "Не смотря на то, что по паспорту мне 57 лет, в душе я всё еще маленький ребенок. И этот ребенок просто " +
      "в восторге от всяких игрушек, которые продаются в Мишке! Такие уютные, тёплые, очень аккуратно и плотно связано. " +
      "Заказывайте, вы не пожалеете!",
      name: "Юрий Васильевич",
      tag: "@bigbosss"
    },
    {
      text: "Сначала купила шарфик для себя, качество и оригинальность шарфа приятно удивили. " +
      "Вопрос с новогодними подарками для мамы и подруг разрешился сам собой!:)",
      name: "Маргарита Неркович",
      tag: "@marnerkovich"
    }
  ];

  var commentBlock = document.querySelector(".comment");
  var commentText = null;
  var commentAuthor = null;
  var currentComment = 0;

  var renderComment = function (commentObj) {
    commentText.textContent = commentObj.text;
    commentAuthor.name.textContent = commentObj.name;
    commentAuthor.tag.textContent = commentObj.tag;
  };

  var showPrevComment = function () {
    return true;
  };

  var showNextComment = function () {
    return true;
  };

  if (commentBlock) {
    commentText = commentBlock.querySelector(".comment__text");
    commentAuthor = {
      name: commentBlock.querySelector(".comment__name"),
      tag: commentBlock.querySelector(".comment__tag")
    };

    renderComment(comments[0]);
  }

  window.comment = {
    showPrev: showPrevComment,
    showNext: showNextComment
  };
})();
