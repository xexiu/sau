$(document).ready(function(e){
  $('.target').click(function(ev){
    var _self = $('.dropDown');
    ev.stopPropagation();
    $(_self).toggle(this);
  }); // Hide - Show the drop-down

  $(".dropDown").click(function(e){
    e.stopPropagation();
  }); // Stop the bubble to go outside

  $(document).click(function(){
    $('.dropDown').fadeOut();
  }); // Close the drop-down when clicking outside of it

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      var _self = $('.dropDown');
      $(_self).fadeOut();
    }
  }); // Press ESC will also close the drop-down
});
