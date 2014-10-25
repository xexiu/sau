$(document).ready(function() {
  // Fixed position Left Menu when scrolling
  $(window).scroll(function(){
    $("#menu_items").css({
      "top": Math.max(0,50-$(this).scrollTop()),
      "position": "fixed"
    }
    );
  });

// Left side SPY when scrolling
$(window).scroll(function(){
  var pageY = pageYOffset;
  console.log(pageY);
  if (pageY > 648 && pageY < 790 ) {
    $('#tag_1').addClass('active');
  }else{
    $('#tag_1').removeClass('active');
  }
  if (pageY > 790 && pageY < 980) {
    $('#tag_2').addClass('active');
  }else{
    $('#tag_2').removeClass('active');
  }
});

// if (pageY > 207 && pageY < 335) {
//   $('#tag_2').addClass('active');
// }else{
//   $('#tag_2').removeClass('active');
// }

// if (pageY > 335 && pageY < 465) {
//   $('#tag_3').addClass('active');
// }else{
//   $('#tag_3').removeClass('active');
// }

// if (pageY > 465 && pageY < 595) {
//   $('#tag_4').addClass('active');
// }else{
//   $('#tag_4').removeClass('active');
// }

// if (pageY > 595 && pageY < 725) {
//   $('#tag_5').addClass('active');
// }else{
//   $('#tag_5').removeClass('active');
// }

// if (pageY > 725 && pageY < 855) {
//   $('#tag_6').addClass('active');
// }else{
//   $('#tag_6').removeClass('active');
// }

$("#tag_1").bind("click", function() {
  $('body').animate({
    scrollTop: $('.Whattosee').offset().top
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_2").bind("click", function() {
  $('body').animate({
    scrollTop: $('.Whattodo').offset().top
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });
});
