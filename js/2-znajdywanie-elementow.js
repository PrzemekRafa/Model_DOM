'use strict';

var parFirst = document.getElementById('parFirst');
console.log(parFirst);

var linki = document.getElementsByClassName('superlink');
console.log(linki);
console.log(linki[0]);

var linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);

var elementPoSelektorze = document.querySelector('#parFirst');
console.log(elementPoSelektorze);

var elementPoSelektorze = document.querySelectorAll('#parFirst > a');
console.log(elementPoSelektorze);

var tablicaZTresciaLinkow = [];

elementPoSelektorze.forEach(function(el, i) {
    console.log(el.innerHTML);
    
    tablicaZTresciaLinkow.push(el.innerHTML);
});

console.log(tablicaZTresciaLinkow);