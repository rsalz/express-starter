alert('who are you and why are you here'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  alert('Hello World!')
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
  $('#houdini_text').hide();
});

$('#reappear').click(function() {
  $('#houdini_text').show();
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
$('#pinkify').click(function() {
	$('#tickled_text').css('color', 'pink');
})


// Problem 4 (Greet Me) -----------------------------------------------------
$('#enter').click(function() {
	$('#my_name').val()
	alert('hello ' + $('#my_name').val())
})
