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
  	context.strokeRect(150,10,100,100)
  })
  //Write your code for p1-p12 here
  //

});
