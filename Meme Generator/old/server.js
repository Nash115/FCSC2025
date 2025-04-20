const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/SCRIPT.JS', express.static(path.join(__dirname, 'script.js')));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(`Utiliser le script : http://localhost:${PORT}/SCRIPT.JS`);
});
