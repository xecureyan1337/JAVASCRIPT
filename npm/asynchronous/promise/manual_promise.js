function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Waiting ${ms} ms to complete the execution`);
      }, ms);
    });
  }
  
  delay(1000).then((message) => {
    console.log(message);
  });
  