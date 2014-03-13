$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.strokeStyle=color;
    context.strokeRect(x, y, sideLen, sideLen);
    
  };
  var drawCircle = function(x, y, radius, color) {
   context.strokeStyle = color
   context.beginPath();
      context.arc(x,y,radius,0,Math.PI);
      context.arc(x,y,radius,Math.PI,0);
    context.closePath();
    context.stroke();
    //context.fill();
  };

  // Write drawTriplet function here

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  $('#p5').click(function() {
    drawSquare(325, 325, 50, 'red');
    drawCircle(350, 350, 25, 'blue');
    drawCircle(375, 350, 25, 'green');
    drawCircle(325, 350, 25, 'green');
    drawCircle(350, 325, 25, 'green');
    drawCircle(350, 375, 25, 'green');
  })
  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //

});
