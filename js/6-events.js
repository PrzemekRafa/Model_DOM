'use strict';

/* function alertFunction () {
    alert('nowy alert');
} */

/* function alertFunction () {
    var par = document.getElementById('parFirst').firstElementChild;
    par.style.backgroundColor = 'pink';
} */

function alertFunction (par) {
    console.log(par);
    par.style.backgroundColor = 'green';
}

var glownyNaglowek = document.getElementById('main-header');

/*glownyNaglowek.onclick = function() {
    this.style.fontSize = '2em';
}*/



var pierwszyLink = document.getElementsByClassName('other')[0];

console.log(pierwszyLink);

pierwszyLink.addEventListener('click', highlight);

function highlight(event) {
    event.preventDefault();
    event.stopPropagation();
    this.style.border = '2px yellow solid';
    alert('kliknięto w link');
}

function zmienTlo () {
    this.style.backgroundColor = 'lightgreen';
    pierwszyLink.removeEventListener('click', highlight)
}

glownyNaglowek.onclick = zmienTlo;

document.getElementById('sectionFirst').addEventListener('click', function(){
    alert('kliknięto w sekcję');
});