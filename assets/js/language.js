/*
var checkbox = document.getElementById('switch');
var espanol = document.getElementsByClassName('esp');
var english = document.getElementsByClassName('eng');

function setDefault() {
    english.style.display = 'block';
    espanol.style.display = 'block';
}

function toggleLanguage() {
    if(checkbox.checked === true) {
        setDefault();
        english.style.display = 'none';
    } else {
        setDefault();
        espanol.style.display = 'none';
    }
}

checkbox.addEventListener('change', toggleLanguage);
*/

var checkbox = document.getElementById('switch');
var espanol = document.getElementsByClassName('esp');
var english = document.getElementsByClassName('eng');

function setDefault() {
    for (var i = 0; i < english.length; i++) {
        english[i].style.display = 'block';
    }
    for (var i = 0; i < espanol.length; i++) {
        espanol[i].style.display = 'block';
    }
}

function toggleLanguage() {
    setDefault(); // Call setDefault first to reset all elements

    if (checkbox.checked === true) {
        for (var i = 0; i < english.length; i++) {
            english[i].style.display = 'none';
        }
    } else {
        for (var i = 0; i < espanol.length; i++) {
            espanol[i].style.display = 'none';
        }
    }
}

checkbox.addEventListener('change', toggleLanguage);
