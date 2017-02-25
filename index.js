var http = require('http');

var server = http.createServer(listener);
server.listen(8000);

function listener(req, rep)  {
    console.log('Hi!');
}
