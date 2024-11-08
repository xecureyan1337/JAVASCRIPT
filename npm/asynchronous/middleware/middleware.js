const express = require('express');
const app = express();

// middleware for logging
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.get('/', (req,res) => {
    res.send('Hello, middleware!');
});

app.listen(1337, () => {
    console.log('server is running at http://localhost:1337');
})