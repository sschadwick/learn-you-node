'use strict';

var filterls = require('./mymodule');

var dirname = process.argv[2];
var ext = process.argv[3];

filterls(dirname, ext, function(err, files) {
  for (var i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
