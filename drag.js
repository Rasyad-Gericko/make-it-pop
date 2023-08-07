//----------------------------- Draggable Script -----------------------------//

$(function () {
  $(".draggable").draggable({
    handle: ".handle",
    containment: "#contain",
    cursor: "grabbing"
  });
  $(".droppable").droppable({
    drop: handleDropEvent
  });
});

$(".draggable").draggable(".handle");
