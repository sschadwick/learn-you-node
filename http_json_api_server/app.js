'use strict';

var http = require('http');
var url = require('url');
var port = process.argv[2];

function parseTime(time) {
  var d = new Date(time);
  var obj = {'hour': d.getHours(), 'minute': d.getMinutes(), 'second': d.getSeconds()};
  return JSON.stringify(obj);
}

function unixTime(time) {
  var d = new Date(time).getTime();
  var obj = {'unixtime': d};
  return JSON.stringify(obj);
}

var server = http.createServer(function(req, res) {
  var ul = url.parse(req.url, true);
  var time = ul.query.iso;

  res.writeHead(200, {'Content-Type': 'application/json'});
  if (ul.pathname === '/api/parsetime') {
    res.write(parseTime(time));
  } else if (ul.pathname ==='/api/unixtime') {
    res.write(unixTime(time));
  }
  return res.end();
}).listen(port);
