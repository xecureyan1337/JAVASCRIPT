const fs = require('fs').promises;

fs.readFile('ex.txt', 'utf-8').then((data) => {
    console.log("FIle: ", data);
}).catch((error) => {
    console.log('Error occured: ', err)
})