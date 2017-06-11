'use strict';

var glownyNaglowek = document.getElementById('main-header');

console.log(glownyNaglowek.innerHTML);

glownyNaglowek.innerHTML = 'Nowy <span>nagłówek</span>';

//glownyNaglowek.outerHTML = '<h3>Mały nagłówek</h3>';

var link = document.getElementsByClassName('link')[0];

console.log(link);

link.href = 'http://akademia108.pl';

console.log(link.className);

link.className = 'klasapierwsza klasadruga';

console.log(link.className);

link.className += ' klasatrzecia';

console.log(link.className);

var wszystkieLinki = document.getElementsByTagName('a');

console.log(wszystkieLinki);

for (var i = 0; i < wszystkieLinki.length; i++) {
    wszystkieLinki[i].className += ' nowaklasa';
}

console.log(wszystkieLinki);

glownyNaglowek.style.color = 'red';
glownyNaglowek.style.fontSize = '4em';

// Podpięcie nowego arkusza styli --->>
var noweStyle = document.createElement('link');
var nowyAtrybut = document.createAttribute('href');
var nowyRel = document.createAttribute('rel');

nowyAtrybut.value = 'http://style.css';
nowyRel.value = 'stylesheet';

noweStyle.setAttributeNode(nowyAtrybut);
noweStyle.setAttributeNode(nowyRel);

console.log(noweStyle);

document.head.appendChild(noweStyle);
// <<--- Podpięcie nowego arkusza styli