const fs = require('fs').promises;

async function readFile() {
    try {
        const data1 = await fs.readFile('file1.txt', 'utf-8');
        console.log('FIle1: ', data1);
        
        const data2 = await fs.readFile('file2.txt', 'utf-8');
        console.log('FIle1: ', data2);

        const data3 = await fs.readFile('file4.txt', 'utf-8');
        console.log('FIle1: ', data3);
    } catch (err) {
        console.error("ERRORRRRRR: ", err);
    }
}

readFile();