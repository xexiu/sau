$(document).ready(function() {
   var enter = $('#main').mouseenter();
   if(enter) {
      $('#main').mouseenter(function() {
         $('#header').fadeIn('fast');
      });
   }
   $('#main').mouseleave(function() {
      $('#header').fadeOut('fast');
   });
});