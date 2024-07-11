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