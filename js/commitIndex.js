var commitJson = JSON.parse(date);
//console.log(commitJson[1].name);

var div = document.getElementById('div');
div.className = 'contentCommit';

var section = document.createElement('section');
section.className = 'sectionCommit';

div.appendChild(section);

for(i = 0; i < commitJson.length; i++){

	var div = document.createElement('div');
	div.className = 'boxCommit';
	section.appendChild(div);

	var article = document.createElement('article');
	article.className = 'articleCommit';
	section.appendChild(article);

	var p = document.createElement('p');
	p.className = 'pCommit';
	var p_commit = document.createTextNode(commitJson[i].commit);
	p.appendChild(p_commit);
	article.appendChild(p);

	var h1 = document.createElement('h1');
	h1.className = 'h1Commit';
	var h1_tittle = document.createTextNode(commitJson[i].name);
	h1.appendChild(h1_tittle);
	article.appendChild(h1);

	var img = document.createElement('img');
	img.className = 'imgCommit';
	img.src = commitJson[i].img;
	article.appendChild(img);

}