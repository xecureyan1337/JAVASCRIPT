const fs = require('fs');

// async operation - callback
fs.readFile('example.txtx', 'utf8', (err, data) => {
  if (err) {
    console.error("Error:\n", err);
    return;
  }
  console.log("file:", data);
});

console.log("Asycnhronous will be read first here!");