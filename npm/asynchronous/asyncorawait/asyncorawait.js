const fs = require('fs').promises;

function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Menunggu ${ms} ms selesai`);
      }, ms);
    });
  }

async function readFile(waktu) {
    try {
        // const data1 = await fs.readFile('file1.txt', 'utf-8');
        // console.log('FIle1: ', data1);
        
        // const data2 = await fs.readFile('file2.txt', 'utf-8');
        // console.log('FIle1: ', data2);

        // const data3 = await fs.readFile('file4.txt', 'utf-8');
        // console.log('FIle1: ', data3);
        delay(waktu).then((message) => {
            console.log(message);
        });
    } catch (err) {
        console.error("ERRORRRRRR: ", err);
    }
}

readFile(5000);
readFile(3000);
readFile(500);