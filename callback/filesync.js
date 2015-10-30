var fs = require("fs");
var data = fs.readFileSync("test.dat");
console.log(data.toString());
console.log("程序执行完成啦！");
