var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
  var str = data.toString();
  var lines = str.split('\n');
  console.log(lines.length - 1);
});
