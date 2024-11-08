const fs = require('fs');

// read random file
fs.readFile('coba.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
})