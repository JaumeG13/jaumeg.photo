function setDefault() {
    document.getElementById('eng').style.display = 'none';
    document.getElementById('esp').style.display = 'none';
}

function toggleLanguage() {
    if(document.getElementById('switch').checked = true) {
        setDefault();
        document.getElementById('eng').style.display = 'none';
        document.getElementById('esp').style.display = 'block';
    }

    if(document.getElementById('switch').checked = false) {
        setDefault();
        document.getElementById('eng').style.display = 'block';
        document.getElementById('esp').style.display = 'none';
    }
}