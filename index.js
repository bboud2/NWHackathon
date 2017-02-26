var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

function listener(req, resp) {
    //determine local path to requested resource
    var localFile = path.join(process.cwd(), url.parse(req.url).pathname);
    var contentType = path.extname(localFile).substr(1); //substr to remove extra '.' from extname
    if (localFile === (process.cwd() + '/')) {
        //hacky way to redirect directory to {dir}/index.html
        localFile += 'index.html';
        contentType = 'html';
    } 

    fs.open(localFile, 'r', (err, fd) => {
        if (err) {
            //file not found
            resp.writeHead(404, {'Content-Type': 'text/plain'});
            resp.write("404 Not Found\n");
            resp.end();
            return;
        }
        fs.readFile(fd, 'utf8', (err, data) => {
            if (err) {
                //incorrect file conversion
                resp.writeHead(500, {'Content-Type': 'text/plain'});
                resp.write(err + '\n');
                resp.end();
                return;
            }
            resp.writeHead(200, {'Content-Type': 'text/' + contentType});
            resp.write(data, 'utf8');
            resp.end();
        });
    });
}

http.createServer(listener).listen(8000);

