var fs = require('fs');
var buf = new Buffer(1024);

console.log("ready to open the exist file");

fs.open("input.txt",'r+',function(err,fd){
	if(err){
		return console.error(err);
	}
	console.log("open success");
	console.log("ready to read");
	
	fs.read(fd,buf,0,buf.length,0 ,function(err,bytes,ff){
		if(err){
			return console.error(err);
		}
		console.log(bytes + " byte was readed!");

		if(bytes > 0){
			console.log(buf.slice(0,bytes).toString());
		}
		fs.close(fd,function(){
			if(err){
				console.log(err);
			}
		console.log("file close success!")
		});

	});

});
