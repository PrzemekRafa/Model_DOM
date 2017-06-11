'use strict';

var paragraf = document.getElementById('parFirst');
console.log(paragraf);
console.log(paragraf.parentNode);
console.log(paragraf.parentElement);

console.log(paragraf.childNodes);
/* Poniższego używamy częściej, bo pomija białe znaki */
console.log(paragraf.children);
console.log(paragraf.firstChild);
console.log(paragraf.lastChild);

/* Poniższych używamy częściej, bo pomija białe znaki */
console.log(paragraf.firstElementChild);
console.log(paragraf.lastElementChild);


console.log(paragraf.nextSibling);
console.log(paragraf.previousSibling);

/* Poniższych używamy częściej, bo pomija białe znaki */
console.log(paragraf.nextElementSibling);
console.log(paragraf.previousElementSibling);

paragraf.childNodes.forEach(function(element, i){
   if(element.nodeType === 8) {
       console.log('Komentarz');
       
       element.parentNode.removeChild(element);
   } 
});
