var http = require('http');

http.createServer(function(req, res) {

    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('I am in server' + req.url + '<br>');
    res.write('Hello Word!');

    res.end();

}).listen(3000);