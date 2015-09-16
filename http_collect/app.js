'use strict';

var http = require('http');
var url = process.argv[2];
var result = '';

http.get(url, function(req) {
  req.on('data', function(data) {
    result += data;
  });

  req.on('error', function() {
  });

  req.on('end', function() {
    console.log(result.length);
    console.log(result);
  });
});
