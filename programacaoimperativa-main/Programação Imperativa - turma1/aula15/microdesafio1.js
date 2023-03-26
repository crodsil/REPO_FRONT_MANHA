const fs = require('fs');
 
const p1
// forma convencional
    fs.readFile('file.json', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(JSON.parse(data));
        }
    });
