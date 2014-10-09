$(document).ready(function() {
   var enter = $('#main').mouseenter();
   if(enter) {
      $('#main').mouseenter(function() {
         $('#header').fadeIn('slow');
      });
   }
   $('#main').mouseleave(function() {
      $('#header').fadeOut('slow');
   });
});