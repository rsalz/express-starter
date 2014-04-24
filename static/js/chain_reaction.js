$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
var numBalls= 10

 var ball= []
  for (var j=0; j<numBalls; j++) {
   var b= {
    x:width*Math.random(),
    y:height*Math.random(),
    r:10,
    vy:10*Math.random(),
    vx:10*Math.random()
  };
ball.push(b);
};
var reactions= []

  var updateGame = function() {
    for (var i=0; i<ball.length; i++) {
      var collided= false
    for (var j=0; j<reactions.length; j++) {
      var xdiff=reactions[j].x-ball[i].x
      var ydiff=reactions[j].y-ball[i].y
      var dist = Math.sqrt(xdiff * xdiff + ydiff * ydiff)
      if (dist<reactions[j].r+ball[j].r){
        var collided=true
      }
    }
          if (collided===true){
        ball.splice(i,1);
        i--
      }
    }
  

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
    for (var i=0; i<reactions.length; i++) {
      if (reactions[i].r<30){
        reactions[i].r++;
      }
    }
    for (var i=0; i<reactions.length; i++) {
    context.beginPath();
      context.arc(reactions[i].x,reactions[i].y,reactions[i].r,0,Math.PI);
      context.arc(reactions[i].x,reactions[i].y,reactions[i].r,Math.PI,0);
    context.closePath();
    context.stroke();
  }
    for (var i=0; i<ball.length; i++) {
    context.beginPath();
      context.arc(ball[i].x,ball[i].y,ball[i].r,0,Math.PI);
      context.arc(ball[i].x,ball[i].y,ball[i].r,Math.PI,0);
    context.closePath();
    context.stroke();
    ball[i].x+=ball[i].vx
    ball[i].y+=ball[i].vy
  }
  
setTimeout(updateGame, 10)
}
updateGame();

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;

  
   var b= {
    x:x,
    y:y,
    r:1,
  };
reactions.push(b);
});
});
