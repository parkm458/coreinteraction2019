$(function() {
  $( ".wrong, .correct" ).draggable();
  $( "#blurry" ).droppable({
    accept: ".correct",
    tolerance: "pointer",
    greedy: true,
    drop: function () {
      $( "#smallCorrect2" ).css( {
        opacity: 1
      });
  }});
});
