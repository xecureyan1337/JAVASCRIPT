const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // res.setHeader('Content-Type', 'image/jpg');
    res.end('Hello, Gays!');
})

server.listen(1337, () => {
    console.log('SERver runnign at http://localhost:1337')  
})