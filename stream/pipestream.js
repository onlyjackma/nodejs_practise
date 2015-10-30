var fs = require('fs');

var readerStream  = fs.createReadStream('input.txt');

var writerStream = fs.createWriteStream('output1.txt');

readerStream.pipe(writerStream);

console.log('Program run finished!')

