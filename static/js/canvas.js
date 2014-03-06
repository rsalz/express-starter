$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
  $('#p1').click(function() {
  	context.strokeRect(10,10,100,200)
  })

  $('#p2').click(function() {
  	context.strokeRect(150,10,100,100);
  })

  $('#p3').click(function() {
  	context.beginPath();
  		context.arc(60,290,50,Math.PI,0);
  	context.closePath();
  	context.stroke();
  	
  })

    $('#p4').click(function() {
  	context.beginPath();
  		context.arc(200,190,50,0,Math.PI);
  		context.arc(200,190,50,Math.PI,0);
  	context.closePath();
  	context.stroke();
  	
  })

   $('#p5').click(function() {
  	context.beginPath();
  		context.moveTo(300,10);
  		context.lineTo(300,200);
  	context.closePath();
  	context.stroke();

  })

  //Write your code for p1-p12 here
  //

});
