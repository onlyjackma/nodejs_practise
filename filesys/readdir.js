var fs = require('fs');

console.log('read a directory');

fs.readdir("/tmp/test",function(err,files){
	if(err){
		console.log(err);
	}
	files.forEach(function(file){
		console.log(file);
	});

});

sayHello = function(hi){
	console.log(hi);
}
sayHello("fuck man");

