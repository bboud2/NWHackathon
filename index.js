var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var converter = require('csvtojson');

function convert(filename) {
   var inFilename = filename + '.csv';
   var inFile = path.join(process.cwd(), inFilename);
   console.log('in file: ' + inFile);
   var outFilename = filename + '.json';
   var outFile = path.join(process.cwd(), outFilename);
   console.log('out file: ' + outFile);
   var json = '';

   converter().fromFile(inFile).on('json', (jsonObj) => {
       console.log('got: ' + jsonObj);
       json += JSON.stringify(jsonObj); 
   }).on('end', (error) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log('Finished converting ' + filename);
   });

   fs.writeFileSync(outFile, json);
}

function listener(req, resp) {
    //determine local path to requested resource
    var localFile = path.join(process.cwd(), url.parse(req.url).pathname);
    var contentType = path.extname(localFile).substr(1); //substr to remove extra '.' from extname
    if (localFile === path.dirname(localFile)) {
        //hacky way to redirect directory to {dir}/index.html
        localFile += 'index.html';
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

convert('BUS_STOPS');
http.createServer(listener).listen(8000);

