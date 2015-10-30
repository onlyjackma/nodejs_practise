var fs = require('fs');
console.log('ready to open the file!');
fs.open('input.txt','r+',function(err,fd){
	if(err){
		console.error(err);
	}
	console.log("open success!");
});
