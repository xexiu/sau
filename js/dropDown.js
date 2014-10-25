$(document).ready(function(e){
  $('.target').click(function(ev){
    var self = $('.dropDown');
    ev.stopPropagation();
    $(self).toggle(this);
  }); // Hide - Show the drop-down

  $(".dropDown").click(function(e){
    e.stopPropagation();
  }); // Stop the bubble to go outside

  $(document).click(function(){
    $('.dropDown').fadeOut();
  }); // Close the drop-down when clicking outside of it

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      var self = $('.dropDown');
      $(self).slideDown();
    }
  }); // Press ESC will also close the drop-down
});
