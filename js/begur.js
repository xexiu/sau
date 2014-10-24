var begur = JSON.parse(data_begur);
console.log(begur[0].ver);
// Aside Menu Generation
var main = document.getElementById('main');
var aside_menu = document.getElementById('menu_items');
var aside_menu_nav = document.createElement('nav');
var aside_menu_nav_ul = document.createElement('ul');
// var aside_menu_nav_ul_li = document.createElement('li');
// aside_menu_nav_ul_li.className = '';
// aside_menu_nav_ul_li.id = '0';
aside_menu.appendChild(aside_menu_nav).appendChild(aside_menu_nav_ul);

// Left Aside Menu Items
for(i = 0; i < begur.length; i++){
  var aside_menu_nav_ul_li = document.createElement('li');
  aside_menu_nav_ul_li.id = begur[i].id;
  aside_menu_nav_ul_li.className = 'this_is_a_class';
  var aside_menu_nav_ul_li_inner = '<a href="#'+begur[i].ver+'">' + begur[i].ver + '</a>'; // Trim double quotes (no quotes)
  aside_menu_nav_ul_li.innerHTML = aside_menu_nav_ul_li_inner;
  aside_menu.appendChild(aside_menu_nav).appendChild(aside_menu_nav_ul).appendChild(aside_menu_nav_ul_li);
}

// Generate Section
var section = document.getElementById('important');
