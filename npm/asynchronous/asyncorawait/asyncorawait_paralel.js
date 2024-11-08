const fs = require('fs').promises;

async function readAllFIles() {
    try {
        const [data1, data2, data3] = await Promise.all([
            fs.readFile('file1.txt', 'utf-8'),
            fs.readFile('file2.txt', 'utf-8'),
            fs.readFile('file3.txt', 'utf-8')
        ]);
        console.log('FIle 1: ', data1);
        console.log('FIle 2: ', data2);
        console.log('FIle 3: ', data3);
    } catch (err) {
        console.error('ERRRROR: ', err);
    }
}

readAllFIles();