const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Homepage');
});

app.get('/about', (req,res) => {
    res.send('About us');
});

app.get('/contact', (req,res) => {
    res.send('Contact us');
});

app.listen(1337, () => {
    console.log('Server is running http://localhost:1337');
});