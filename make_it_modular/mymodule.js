'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
  var extension = "." + ext;
  fs.readdir(dir, function(err, files) {
    if (err) { //pass error on to callback
      callback(err, null);
    }
    else {
      var result = [];
      files.forEach(function(entry) {
        if (path.extname(entry) == extension) {
          result.push(entry);
        }
      });
      callback(null, result);
    }
  });
};
