console.log(__filename);
console.log(__dirname);
function sayHello(){
	console.log("Hello Man !");
}
setTimeout(sayHello,2000);
//setInterval(sayHello,2000);
console.time('start');
console.log("Hello %s ! %d",'Man',124);
console.timeEnd('start');

process.on("exit",function(code){
	console.log("over!");
	console.log("exit code is: "+code);
},0);

console.log(process.platform);
console.log(process.arch);
console.log(process.execPath);

process.argv.forEach(function(val,index,array){
 	console.log(index + " : "+ val  );
});
