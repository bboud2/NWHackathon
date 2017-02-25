var converter = require('xml2json');
var path = require('path');
var fs = require('fs');
var filename = 'doc.kml';
var inFile = path.join(process.cwd(), filename);
var outFile = path.join(process.cwd(), 'doc.json');

fs.writeFileSync(outFile, converter.toJson(fs.readFileSync(inFile)));
