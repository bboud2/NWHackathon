var path = require('path');
var fs = require('fs');

function convert(filename) {
   var inFilename = filename + '.csv';
   var inFile = path.join(process.cwd(), '/mapdata', inFilename);
   var inFileContents = fs.readFileSync(inFile, 'utf8');
   var lines = inFileContents.split('\r\n');
   var result = [];
   var headers = lines[0].split(',');
   for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentLine = lines[i].split(',');
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentLine[j];
        }
        result.push(obj);
   }

   var outFilename = filename +'.json';
   var outFile = path.join(process.cwd(), '/mapdata', outFilename);
   fs.writeFileSync(outFile, JSON.stringify(result));
   console.log('Done converting ' + filename);
}

convert('BUS_ROUTES');
convert('BUS_STOPS');
convert('PARKS');
convert('SKYTRAIN_STATIONS_PTS');
convert('TRAFFIC_VOLUMES');
convert('TREES_EAST');
convert('TREES_WEST');
