var fs = require('fs');

fs.readFile('input.txt',function(err,data){
	if(err){
		return console.error(err);
	}
	console.log("async read :"+data.toString());
});

var data = fs.readFileSync('input.txt');
console.log("sync read :"+data.toString());

console.log("Programe is running over!");
