$(document).ready(function() {
// Fixed position Left Menu when scrolling
$(window).scroll(function(){
  $("#menu_items").css({
    "top": Math.max(0,50-$(this).scrollTop()),
    "position": "fixed"
  }
  );
});