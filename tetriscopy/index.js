$(document).ready(function(){
var move = 0
setInterval(function(){
move+=10;
$("#p1").css("top", move);
},1000)
})


$(document).ready(function(){
var move = 0
setInterval(function(){
move+=5;
$("#shape2").css("top", move);
},100)
})

$(document).ready(function(){
var move = 0
setInterval(function(){
move+=5;
$("#shape3").css("top", move);
},100)
})


$("#freeze").click(function() {
  $("#shape1").stop("top", move);
  },0)
});




$(document).ready(function(){

var position = ['0%', '25%', '50%', '75%']
var randomPosition = Math.floor(Math.random()*position.length)
var move = 0

$("#shape1").css("left", position[randomPosition]);


setInterval(function(){
move+=10;

$("#shape1").css("top", move);

},1000)

})
