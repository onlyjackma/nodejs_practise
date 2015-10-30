var fs = require('fs');

listdir = function(path){
	fs.readdir(path,function(err,files){
		if(err){
			return console.log(err);
		}
		files.forEach(function(file){
			
			fs.stat(path+"/"+file,function(err,stats){
				if(err){
					return console.log(err);
				}
				if(stats.isDirectory()){
					console.log(path+"/"+file);
					listdir(path+"/"+file);
				}else{
					console.log(path+"/"+file)
				}
			});
		});
	});
}
listdir("/tmp/test")
