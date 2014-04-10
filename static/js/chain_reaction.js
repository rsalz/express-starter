$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE

 var ball= []
  var b0= {
    x:10,
    y:10,
    r:10,
    vy:5,
    vx:5
  };
  var b1 = {
    x:20,
    y:20,
    r:20,
    vy:5,
    vx:5
  };
  var b2 = {
    x:30,
    y:30,
    r:30,
    vy:5,
    vx:5
  };
  ball.push(b0)
  ball.push(b1)
  ball.push(b2)
  
  var updateGame = function() {
    for (var k=0; k<ball.length; k++){
    if (ball[k].vx >0 && ball[k].x + ball[k].r >= canvas.width) {
      ball[k].vx= -ball[k].vx
    };
    if (ball[k].vy >0 && ball[k].y +ball[k].r >= canvas.height) {
      ball[k].vy= -ball[k].vy
    };
    if (ball[k].vx<0 && ball[k].x - ball[k].r <=0) {
      ball[k].vx= -ball[k].vx
    };
    if (ball[k].vy<0 && ball[k].y -ball[k].r <= 0) {
      ball[k].vy= -ball[k].vy
  };
}
     context.fillStyle = 'white'
      context.fillRect(0,0,800,800);
      context.fill();
    for (var i=0; i<ball.length; i++) {
    context.beginPath();
      context.arc(ball[i].x,ball[i].y,ball[i].r,0,Math.PI);
      context.arc(ball[i].x,ball[i].y,ball[i].r,Math.PI,0);
    context.closePath();
    context.stroke();
    ball[i].x+=ball[i].vx
    ball[i].y+=ball[i].vy
  };
setTimeout(updateGame, 10)
};
updateGame();

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
  });

  updateGame();
});
