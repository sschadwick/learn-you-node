'use strict';

var http = require('http');
var url = process.argv[2];

http.get(url, function(req) {
  req.on('data', function(data) {
    console.log(data.toString());
  });

  req.on('error', function() {
  });

  req.on('end', function() {
  });
});
