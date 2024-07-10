function setDefault() {
    document.getElementById('en').style.display = 'none';
    document.getElementById('es').style.display = 'none';
}

function toggleLanguage() {
    if(document.getElementById('switch').checked) {
        setDefault();
        document.getElementById('en').style.display = 'none';
        document.getElementById('es').style.display = 'block';
    }

    if(document.getElementById('switch').checked = false) {
        setDefault();
        document.getElementById('en').style.display = 'block';
        document.getElementById('es').style.display = 'none';
    }
}