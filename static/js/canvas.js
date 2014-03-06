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

  $('#p6').click(function() {
  	context.strokeStyle = 'green'
  	context.strokeRect(340,10,100,200)
  })

 $('#p7').click(function() {
 	context.fillStyle = 'red'
  	context.beginPath();
  		context.arc(390,270,50,0,Math.PI);
  		context.arc(390,270,50,Math.PI,0);
  	context.closePath();
  	context.stroke();
  	context.fill();
  	
  })  


 $('#p8').click(function() {
  	context.strokeStyle = 'blue'
  	context.fillStyle = 'yellow'
  	context.fillRect(10,300,200,100);
  	context.strokeRect(10,300,200,100);
  	context.fill();
  })

});
