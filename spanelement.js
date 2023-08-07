//----------------------------- Span Element Script -----------------------------//

$(".span-wrapper").each(function (index) {
  let relatedEl = $(".span-element").eq(index);
  relatedEl.appendTo($(this));
});
