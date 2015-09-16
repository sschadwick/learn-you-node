var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]); //load file into buffer

var str = buf.toString();  //convert buffer into a single long string
var array = str.split('\n'); //split string into array based on \n occurances
console.log(array.length - 1); //number \n is 1 less than arr.length
