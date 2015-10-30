var fs = require('fs');

console.log("make a dir");

fs.mkdir("/tmp/test",function(err){
	if(err){
		console.log(err);
	}
	console.log("create directory success!");
});
