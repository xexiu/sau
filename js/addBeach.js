$(document).ready(function() {
  var beaches = JSON.parse(data);
  //console.log(beaches[0].name);

  // Add active status for links on breadcrumb depending on which page you are!!
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);
  //console.log(filename);
  $("a[href='"+filename+"']").addClass('active-link');


  var main = document.getElementById('main');
  var aside_menu = document.getElementById('menu_items');
  var aside_menu_nav = document.createElement('nav');
  var aside_menu_nav_ul = document.createElement('ul');
  aside_menu.appendChild(aside_menu_nav).appendChild(aside_menu_nav_ul);

  // Generate Section
  var section = document.getElementById('important');
  function generateContent(){
    for(i = 0; i < beaches.length; i++){
      // Left Aside Menu Items
      var aside_menu_nav_ul_li = document.createElement('li');
      aside_menu_nav_ul_li.id = 'tag_'+beaches[i].id;
      aside_menu_nav_ul_li.className = 'menu_item';
      var aside_menu_nav_ul_li_inner = '<a href="#'+beaches[i].name+'">' + beaches[i].name + '</a>'; // Trim double quotes (no quotes)
      aside_menu_nav_ul_li.innerHTML = aside_menu_nav_ul_li_inner;
      aside_menu.appendChild(aside_menu_nav).appendChild(aside_menu_nav_ul).appendChild(aside_menu_nav_ul_li);
      //=========================================================================================================
      var a_name = document.createElement('a');
      a_name.name = beaches[i].name;
      var article = document.createElement('article');
      article.className = 'cf ' + beaches[i].name.replace(/[\s+'']/g, ""); // Replace white spaces and single quotes
      var header = document.createElement('header');
      var h2 = document.createElement('h2');
      var h2_content = document.createTextNode(beaches[i].name);
      var img_1 = document.createElement('img');
      img_1.className = 'img';
      img_1.src = beaches[i].img;
      var p = document.createElement('p');
      var p_content = document.createTextNode(beaches[i].description);
      var aside = document.createElement('aside');
      var aside_content = '<a href="">Vote Down</a><a href="">Vote Up</a>';
      aside.innerHTML = aside_content;
      aside.className = 'thumbs';
      main.appendChild(section).appendChild(article);
      article.appendChild(a_name);
      article.appendChild(header).appendChild(h2).appendChild(h2_content);
      article.appendChild(img_1);
      article.appendChild(p).appendChild(p_content);
      article.appendChild(aside);
    }
  }
  generateContent();

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
//console.log(pageY)
if (pageY > 102 && pageY < 207 ) {
  // $('#0').removeClass('active');
  $('#tag_1').addClass('active');
}else{
  $('#tag_1').removeClass('active');
}

if (pageY > 207 && pageY < 335) {
  $('#tag_2').addClass('active');
}else{
  $('#tag_2').removeClass('active');
}

if (pageY > 335 && pageY < 465) {
  $('#tag_3').addClass('active');
}else{
  $('#tag_3').removeClass('active');
}

if (pageY > 465 && pageY < 595) {
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
    scrollTop: $('.PlatjadAro').offset().top-200
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

$("#tag_9").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Roses').offset().top-200
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_9").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Roses').offset().top-200
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_9").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Roses').offset().top-200
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$("#tag_9").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Roses').offset().top-200
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

});
