var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    express = require('express');

var port = 9000;

var options = {
    key: fs.readFileSync('pura-im.key'),
    cert: fs.readFileSync('pura-im.crt')
};

var app = express();

var server = https.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});

app.get('/', function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
});