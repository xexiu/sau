var beaches = JSON.parse(data);
console.log(beaches[0].name);

var main = document.getElementById('main');
var aside_menu = document.getElementById('menu_items');
var aside_menu_nav = document.createElement('nav');
var aside_menu_nav_ul = document.createElement('ul');
var aside_menu_nav_ul_li = document.createElement('li');
aside_menu_nav_ul_li.className = 'active';
var aside_menu_nav_ul_li_inner = '<a href="#">Browse All</a>';
aside_menu_nav_ul_li.innerHTML = aside_menu_nav_ul_li_inner;
aside_menu.appendChild(aside_menu_nav).appendChild(aside_menu_nav_ul).appendChild(aside_menu_nav_ul_li);

// Left Aside Menu Items
for(i = 0; i < beaches.length; i++){
  var aside_menu_nav_ul_li = document.createElement('li');
  aside_menu_nav_ul_li.id = beaches[i].id;
  aside_menu_nav_ul_li.className = 'tile';
  var aside_menu_nav_ul_li_inner = '<a href="#">' + beaches[i].name.replace(/\"([^(\")"]+)\":/g,"$1:") + '</a>';
  aside_menu_nav_ul_li.innerHTML = aside_menu_nav_ul_li_inner;
  aside_menu.appendChild(aside_menu_nav).appendChild(aside_menu_nav_ul).appendChild(aside_menu_nav_ul_li);
}

var section = document.createElement('section');
section.id = 'important';
section.className = 'cf';
var h1 = document.createElement('h1');
var h1_content = document.createTextNode("10 Most voted costs");
main.appendChild(section).appendChild(h1).appendChild(h1_content);

// Generate content center
for(i = 0; i <= 5; i++){
  var article = document.createElement('article');
  article.className = 'cf';
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
  article.appendChild(header).appendChild(h2).appendChild(h2_content);
  article.appendChild(img_1);
  article.appendChild(p).appendChild(p_content);
  article.appendChild(aside);
}
