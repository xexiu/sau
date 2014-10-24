$(document).ready(function() {
  var beaches = JSON.parse(data);
  console.log(beaches[0].name);

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
      aside_menu_nav_ul_li.id = 'id_'+beaches[i].name.replace(/[\s+'']/g, "");
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
  console.log(pageY)
  if (pageY > 102 && pageY < 207 ) {
    // $('#0').removeClass('active');
    $("id_"+beaches[0].name).addClass('active');
  }else{
    $('#1').removeClass('active');
  }

  if (pageY > 207 && pageY < 335) {
    $('#2').addClass('active');
  }else{
    $('#2').removeClass('active');
  }

  if (pageY > 335 && pageY < 465) {
    $('#3').addClass('active');
  }else{
    $('#3').removeClass('active');
  }

  if (pageY > 465 && pageY < 595) {
    $('#4').addClass('active');
  }else{
    $('#4').removeClass('active');
  }

  if (pageY > 595 && pageY < 725) {
    $('#5').addClass('active');
  }else{
    $('#5').removeClass('active');
  }

  if (pageY > 725 && pageY < 855) {
    $('#6').addClass('active');
  }else{
    $('#6').removeClass('active');
  }

  if (pageY > 855 && pageY < 985) {
    $('#7').addClass('active');
  }else{
    $('#7').removeClass('active');
  }

  if (pageY > 985 && pageY < 1115) {
    $('#8').addClass('active');
  }else{
    $('#8').removeClass('active');
  }

  if (pageY > 1115 && pageY < 1245) {
    $('#9').addClass('active');
  }else{
    $('#9').removeClass('active');
  }

  if (pageY > 1245 && pageY < 1375) {
    $('#10').addClass('active');
  }else{
    $('#10').removeClass('active');
  }

  if (pageY > 1375 && pageY < 1505) {
    $('#11').addClass('active');
  }else{
    $('#11').removeClass('active');
  }

  if (pageY > 1505 && pageY < 1635) {
    $('#12').addClass('active');
  }else{
    $('#12').removeClass('active');
  }

  if (pageY > 1635 && pageY < 1765) {
    $('#13').addClass('active');
  }else{
    $('#13').removeClass('active');
  }

  if (pageY > 1765 && pageY < 1895) {
    $('#14').addClass('active');
  }else{
    $('#14').removeClass('active');
  }
});

$("id_"+beaches[0].name).bind("click", function() {
  console.log('hi');
  $('body').animate({
    scrollTop: $('.TossadeMar').offset().top
  }, 1000); //scroll to div with container as ID.
return false; //Prevent Default and event bubbling.
});

$("#2").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Begur').offset().top
  }, 1000); //scroll to div with container as ID.
return false; //Prevent Default and event bubbling.
});

$("#3").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Palamós').offset().top
  }, 1000); //scroll to div with container as ID.
return false; //Prevent Default and event bubbling.
});

$("#4").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.SantFeliudeGuíxols').offset().top-50
  }, 1000); //scroll to div with container as ID.
return false; //Prevent Default and event bubbling.
});

$("#5").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".Lescala").offset().top-50
  }, 1000); //scroll to div with container as ID.
return false; //Prevent Default and event bubbling.
});

$("#6").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".Llafranc").offset().top-100
  }, 1000); //scroll to div with container as ID.
return false; //Prevent Default and event bubbling.
});

$("#7").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".LEstartit").offset().top-120
  }, 1000); //scroll to div with container as ID.
return false; //Prevent Default and event bubbling.
});

$("#8").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".Llancà").offset().top-120
  }, 1000); //scroll to div with container as ID.
return false; //Prevent Default and event bubbling.
});

$("#9").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".PlatjadAro").offset().top-140
  }, 1000); //scroll to div with container as ID.
return false; //Prevent Default and event bubbling.
});

$("#10").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Roses').offset().top-200
  }, 1000); //scroll to div with container as ID.
return false; //Prevent Default and event bubbling.
});

$("#11").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.LloretdeMar').offset().top-220
  }, 1000); //scroll to div with container as ID.
return false; //Prevent Default and event bubbling.
});

$("#12").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Tamariu').offset().top-240
  }, 1000); //scroll to div with container as ID.
return false; //Prevent Default and event bubbling.
});

$("#13").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Empuriabrava').offset().top-260
  }, 1000); //scroll to div with container as ID.
return false; //Prevent Default and event bubbling.
});

$("#14").bind("click", function() {
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Portbou').offset().top-260
  }, 1000); //scroll to div with container as ID.
return false; //Prevent Default and event bubbling.
});

});
