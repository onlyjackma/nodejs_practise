var fs = require('fs');
fs.stat('input.txt',function(err,stat){
	if(err){
		console.err(err);
	}
	console.log(stat.isFile());
	console.log(stat);
});
