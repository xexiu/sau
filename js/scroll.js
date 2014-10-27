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
  console.log(pageY)
  if (pageY > 100 && pageY < 225 ) {
  // $('#0').removeClass('active');
  $('#tag_1').addClass('active');
}else{
  $('#tag_1').removeClass('active');
}

if (pageY > 225 && pageY < 315) {
  $('#tag_2').addClass('active');
}else{
  $('#tag_2').removeClass('active');
}

if (pageY > 315 && pageY < 417) {
  $('#tag_3').addClass('active');
}else{
  $('#tag_3').removeClass('active');
}

if (pageY > 417 && pageY < 595) {
  $('#tag_4').addClass('active');
}else{
  $('#tag_4').removeClass('active');
}

if (pageY > 595 && pageY < 725) {
  $('#tag_5').addClass('active');
}else{
  $('#tag_5').removeClass('active');
}

if (pageY > 725 && pageY < 855) {
  $('#tag_6').addClass('active');
}else{
  $('#tag_6').removeClass('active');
}

if (pageY > 855 && pageY < 985) {
  $('#tag_7').addClass('active');
}else{
  $('#tag_7').removeClass('active');
}

if (pageY > 985 && pageY < 1115) {
  $('#tag_8').addClass('active');
}else{
  $('#tag_8').removeClass('active');
}

if (pageY > 1115 && pageY < 1245) {
  $('#tag_9').addClass('active');
}else{
  $('#tag_9').removeClass('active');
}

if (pageY > 1245 && pageY < 1375) {
  $('#tag_10').addClass('active');
}else{
  $('#tag_10').removeClass('active');
}

if (pageY > 1375 && pageY < 1505) {
  $('#tag_11').addClass('active');
}else{
  $('#tag_11').removeClass('active');
}

if (pageY > 1505 && pageY < 1635) {
  $('#tag_12').addClass('active');
}else{
  $('#tag_12').removeClass('active');
}

if (pageY > 1635 && pageY < 1765) {
  $('#tag_13').addClass('active');
}else{
  $('#tag_13').removeClass('active');
}

if (pageY > 1765 && pageY < 1895) {
  $('#tag_14').addClass('active');
}else{
  $('#tag_14').removeClass('active');
}
});

$("#tag_1").bind("click", function() {
  $('body').animate({
    scrollTop: $('.TossadeMar').offset().top
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_2").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Begur').offset().top
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_3").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Palamós').offset().top
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_4").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.SantFeliudeGuíxols').offset().top-50
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_5").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".Lescala").offset().top-50
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_6").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".Llafranc").offset().top-100
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_7").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".LEstartit").offset().top-120
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_8").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".Llancà").offset().top-120
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_9").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".PlatjadAro").offset().top-140
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_10").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Roses').offset().top-200
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_11").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.LloretdeMar').offset().top-220
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_12").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Tamariu').offset().top-240
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_13").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Empuriabrava').offset().top-260
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_14").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Portbou').offset().top-260
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

});
