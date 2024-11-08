const fs = require('fs');

// async operation - callback
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Terjadi error:", err);
    return;
  }
  console.log("file:", data);
});

console.log("Asycnhronous will be read first here!");