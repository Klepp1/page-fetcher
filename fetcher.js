const fs = require('fs');
const request = require('request');
let bodyy;
request(`${process.argv[2]}`, (error, response, body) => {
bodyy = body;
});

setTimeout(() => {
  fs.writeFile(`${process.argv[3]}`, bodyy, err => {
    if (err) {
      console.error(err);
      return
    }
    console.log(`Downloaded and saved ${bodyy.length} bytes to ./index.html`);
  });
}, 1000);

