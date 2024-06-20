const fs = require('fs');
const parser = require('./parser')

fs.readFile('data.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error(error);
        return;
      }

      const gatheredData = parser.parseText(data);
      console.log(gatheredData);
});