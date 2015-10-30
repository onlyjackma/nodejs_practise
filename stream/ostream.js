var fs = require('fs');
var data = 'wo shi xiao ma ge ! who are you?';

var wStream  = fs.createWriteStream('output.txt');

wStream.write(data,'UTF8');
wStream.end();
wStream.on('finish',function(){
	console.log('write finished!');
});

wStream.on('error',function(err){
	console.log(err.stack);
});

console.log('Program finished');

