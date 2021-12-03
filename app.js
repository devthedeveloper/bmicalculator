var path = require('path')
var fs = require('fs')
let {calculateBMI,countOverweight} = require('./functions/functions')
let filePath = path.join(__dirname, 'data/data.json')

var sampleInput = [];
var importStream = fs.createReadStream(filePath, {flags: 'r', encoding: 'utf-8'});
importStream.on('data', function(chunk) {
   sampleInput.push(...JSON.parse(chunk));       
});


importStream.on('end', function(item) {
    let results = calculateBMI(sampleInput)
    console.table(results)
    console.log('total overweight '+countOverweight(results));
});




