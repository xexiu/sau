$(document).ready(function() {
  var tossa = JSON.parse(data_tossa);
  console.log(tossa[0].view);

  // Add active status for links on breadcrumb depending on which page you are!!
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);
  //console.log(filename);
  $("a[href='"+filename+"']").addClass('active-link');

  // Aside Menu Generation
  var main = document.getElementById('main');
  var aside_menu = document.getElementById('menu_items');
  var aside_menu_nav = document.createElement('nav');
  var aside_menu_nav_ul = document.createElement('ul');
  aside_menu.appendChild(aside_menu_nav).appendChild(aside_menu_nav_ul);

  // Left Aside Menu Items
  for(i = 0; i < tossa.length; i++){
    var aside_menu_nav_ul_li = document.createElement('li');
    aside_menu_nav_ul_li.id = 'tag_'+tossa[i].id;
    aside_menu_nav_ul_li.className = 'menu_item';
    var aside_menu_nav_ul_li_inner = '<a href="#'+tossa[i].view+'">' + tossa[i].view + '</a>'; // Trim double quotes (no quotes)
    aside_menu_nav_ul_li.innerHTML = aside_menu_nav_ul_li_inner;
    aside_menu.appendChild(aside_menu_nav).appendChild(aside_menu_nav_ul).appendChild(aside_menu_nav_ul_li);
  }

  // Generate Section
  var section = document.getElementById('important');
});