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

 $('#p9').click(function() {
 	for (var x=240; x<490; x=x+50)
 		context.strokeRect(x,350,50,50);
 	
 })

$('#p10').click(function() {
 	for (var x=0; x<500; x=x+5)
 		context.strokeRect(x,450,5,5);
 	
 })

$('#p11').click(function() {
 	for (var x=0; x<500; x=x+5)
 		for (var y=0; y<500; y=y+5)
 			context.strokeRect(x,y,5,5);
 	
 })

$('#p12').click(function() {
 	for (var x=5; x<205; x=x+10)
 		context.arc(250,250,x,0,Math.PI);
  		context.arc(250,250,x,Math.PI,0);
 })

});
