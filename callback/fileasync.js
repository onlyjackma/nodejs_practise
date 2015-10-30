var fs = require("fs");
var data = fs.readFile("test.dat1",function(err,data){
	if(err){
		console.error(err);
		return;
	}
	console.log(data.toString());
});
console.log("程序执行完成啦！");
