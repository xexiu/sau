$(document).ready(function(e){
  $('.target').click(function(ev){
   var _self = $('.dropDown');
   ev.stopPropagation();
   $(_self).toggle(this);
 }); // Hide - Show the drop-down

$('.target').click(function(){
	$('.dropDown').css({'display', 'block'});
});

$(".dropDown").click(function(e){
	e.stopPropagation();
}); // Stop the bubble to go outside

$(document).click(function(){
	$('.dropDown').slideUp();
	}); // Close the drop-down when clicking outside of it

$(document).keyup(function(e) {
	if (e.keyCode === 27) {
  		var _self = $('.dropDown');
  			$(_self).slideUp();
}
}); // Press ESC will also close the drop-down

});
