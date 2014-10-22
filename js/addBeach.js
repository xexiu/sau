var beaches = JSON.parse(data);
console.log(beaches[0].name);

for(i = 0; i < 3; i++){
  var main = document.getElementById('main');
// var section = document.getElementsByTagName('section');
var section = document.createElement('section');
section.id = 'important';
section.className = 'cf';
var h1 = document.createElement('h1');
var h1_content = document.createTextNode("Most important costs");
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
var aside_content = '<a href="">Like</a><a href="">Dislike</a>';
aside.innerHTML = aside_content;
aside.className = 'thumbs';
main.appendChild(section).appendChild(h1).appendChild(h1_content);
main.appendChild(section).appendChild(article);
article.appendChild(header).appendChild(h2).appendChild(h2_content);
article.appendChild(img_1);
article.appendChild(p).appendChild(p_content);
article.appendChild(aside);
// section.appendChild(article);
}



