var beaches = JSON.parse(data);
console.log(beaches[0].name);

var main = document.getElementById('main');
// var section = document.getElementsByTagName('section');
var section = document.createElement('section');
section.id = 'important';
var h1 = document.createElement('h1');
var h1_content = document.createTextNode("Most important costs");
var article = document.createElement('article')
main.appendChild(section).appendChild(h1).appendChild(h1_content);
main.appendChild(section).appendChild(article);
// section.appendChild(article);


