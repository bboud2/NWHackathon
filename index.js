
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

http.createServer(listener).listen(8000);

function listener(req, resp) {
    var localFile = path.join(process.cwd(), url.parse(req.url).pathname);
   
    fs.open(localFile, 'r', (err, fd) => {
        if (err) {
            resp.writeHead(404, {'Content-Type': 'text/plain'});
            resp.write("404 Not Found\n");
            resp.end();
            return; 
        }
        fs.readFile(fd, 'binary', (err, data) => {
            if (err) {
                resp.writeHead(500, {'Content-Type': 'text/plain'});
                resp.write(err + '\n');
                resp.end();
                return;    
            }
            resp.writeHead(200, {'Content-Type': 'text/html'});
            resp.write(data, 'binary');
            resp.end();
        });
    });
}
