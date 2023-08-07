//----------------------------- Make It Pop Script -----------------------------//

$(document).ready(function () {
  if ($(window).width() < 480) {
    $(".main-wrapper").removeClass("no-scroll");
  }
});

$(".main-wrapper").addClass("no-scroll");
$(".section_double").addClass("absolute");
$(".section_double").addClass("no-pointer");
$(".section_timeline").addClass("hide");
$(".mip-spacer").addClass("hide");
$(".fixed-form_hide-trigger").addClass("hide");

$(".fixed-form_open-button").on("click", function () {
  $("body").addClass("no-scroll");
});

$(".fixed-form_close-button").on("click", function () {
  $("body").removeClass("no-scroll");
});

$(".hero_elements-column.drag").on("click", function () {
  $(".main-wrapper").removeClass("no-scroll");
});

$(".grid_text").on("click", function () {
  $("body").addClass("no-scroll");

  setTimeout(function () {
    $(window).scrollTop(0);
    $(".section_mobile-hero").addClass("hide");
  }, 1800);

  setTimeout(function () {
    $("body").removeClass("no-scroll");
    $(".logo-2").toggleClass("logo-show");
    $(".logo-bg-2").toggleClass("logo-show");
    $(".fixed-form_open-button.is-1").addClass("hide");
  }, 2300);
});

$(".grid_text").on("click", function () {
  $(".section_double").removeClass("absolute");
  $(".section_double").removeClass("no-pointer");
  $(".section_timeline").removeClass("hide");
  $(".double_wrapper").toggleClass("is-long");
  $(".mip-spacer").removeClass("hide");
  $(".fixed-form_hide-trigger").removeClass("hide");
});

$(".contact_form-dropdown-button").on("click", function () {
  $(".contact_wrapper").toggleClass("auto-scroll");
});
