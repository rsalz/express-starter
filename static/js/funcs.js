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

  var drawTriplet = function(x, y, color) {
    drawCircle(x+50, y+30, 30, color)
    drawCircle(x+30, y+60, 30, color)
    drawCircle(x+70, y+60, 30, color)
  }
  // Write drawTriplet function here

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 150, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 150, 50, 'red');
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

  $('#p6').click(function() {
    drawTriplet(190, 300, 'green');
  })

  $('#p7').click(function() {
    drawTriplet(0, 0, 'blue');
  })

  $('#p8').click(function() {
    drawTriplet(0, 200, 'orange');
    drawTriplet(0, 300, 'yellow');
    drawTriplet(0, 400, 'pink');
    drawTriplet(110, 211, 'purple');
  })

  

  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //

});
