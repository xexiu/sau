$(document).ready(function(e){
  $('.target').click(function(ev){
   var self = $('.dropDown');
   ev.stopPropagation();
   $(self).slideToggle(this);
 }); // Hide - Show the drop-down

$(".dropDown").click(function(e){
	e.stopPropagation();
}); // Stop the bubble to go outside

$(document).click(function(){
	$('.dropDown').slideToggle();
	}); // Close the drop-down when clicking outside of it

$(document).keyup(function(e) {
	if (e.keyCode === 27) {
  		var self = $('.dropDown');
  			$(self).slideToggle();
}
}); // Press ESC will also close the drop-down

});
