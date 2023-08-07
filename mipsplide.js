//----------------------------- Slide JS Script -----------------------------//

var elms = document.getElementsByClassName("splide");
for (var i = 0, len = elms.length; i < len; i++) {
  new Splide(elms[i], {
    perPage: 3,
    perMove: 1,
    type: "loop",
    focus: "center",
    breakpoints: {
      767: {
        perPage: 1
      }
    }
  }).mount();
}

// All Slliders
$(".next-splide").click(function () {
  $(this)
    .closest(".works_wrapper")
    .find(".splide__arrow.splide__arrow--next")
    .click();
});
$(".prev-splide").click(function () {
  $(this)
    .closest(".works_wrapper")
    .find(".splide__arrow.splide__arrow--prev")
    .click();
});
