$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE

  //run an iteration of the game
  //var x= 20
  //var y=20
  var ball= {
    x: 20,
    y: 20,
    r: 20    
  };
  var updateGame = function() {
    context.fillStyle = 'white'
      context.fillRect(0,0,800,800);
      context.fill();
    context.beginPath();
      context.arc(ball.x,ball.y,ball.r,0,Math.PI);
      context.arc(ball.x,ball.y,ball.r,Math.PI,0);
    context.closePath();
    context.stroke();
    ball.x+=5
    ball.y+=5
  setTimeout(updateGame,10)
  };
  updateGame();
});
