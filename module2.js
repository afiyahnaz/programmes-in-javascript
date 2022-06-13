var os = require('os');
console.log(os.platform());
console.log(os.cpus().length);



var fs = require('fs');

var file = fs.readFileSync('recurssionMAX.js');

console.log(file.toString());