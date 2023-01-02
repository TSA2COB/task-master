const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json("Welcome to task-master");
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'));
});

app.listen(PORT, () => {
    console.log('Server started at http://localhost:' + PORT);
});
