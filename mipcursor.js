//----------------------------- Cursor Script -----------------------------//

$(".trigger, .control").on("mouseenter mouseleave", function () {
  $(".cursor_dot-1").toggleClass("is-opacity");
  $(".cursor_dot-2").toggleClass("is-link");
});

$(".splide__img, .whyus_card-top").on("mouseenter mouseleave", function () {
  $(".cursor_dot-1").toggleClass("is-larger");
  $(".cursor_dot-2").toggleClass("is-larger");
});

$(".contact_form-wrapper").on("mouseenter mouseleave", function () {
  $(".cursor_dot-2").toggleClass("is-hidden");
});
