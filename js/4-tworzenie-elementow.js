'use strict';

var istniejacyWezel = document.getElementById('parSecond').children[0];

console.log(istniejacyWezel);

var naglowek = document.createElement('h2');
var nowaLinia = document.createElement('br')
var tekstNaglowka = document.createTextNode('Nowy nagłówek h2');
var dalszyTekstNaglowka = document.createTextNode('Dalszy tekst nagłówka');

var atrybut = document.createAttribute('id');


naglowek.setAttributeNode(atrybut);

naglowek.id = 'nowe-id';

naglowek.appendChild(tekstNaglowka);
naglowek.appendChild(nowaLinia);
naglowek.appendChild(dalszyTekstNaglowka);


console.log(naglowek);

/* document.getElementById('parSecond').insertBefore(naglowek, istniejacyWezel); */
//To samo co wyżej ale bardziej uniwersalną metodą
istniejacyWezel.parentElement.insertBefore(naglowek, istniejacyWezel);

istniejacyWezel.parentElement.removeChild(naglowek, istniejacyWezel);