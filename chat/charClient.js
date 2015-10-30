var net = require('net');
var readline = require('readline');

var rl = new readline.createInterface({
	input:process.stdin,
	output:process.stdout,
	terminal:false
});

rl.setPrompt(">>|");


var HOST = '127.0.0.1';
var PORT = 9000;

var client = new net.Socket();

var obj = {
	type:'login',
	id:'12222',
	name:'xiaomage'
}

client.connect(PORT,HOST,function(){
	console.log('Connect to '+HOST+":"+PORT);
	client.write(JSON.stringify(obj));
});

client.on('data',function(data){
		console.log(data.toString());
	rl.prompt();
});

client.on('end',function(){
		console.log("Server closed");
});

rl.on('line',function(data){
	if(data){
	obj['msg'] = data;
	obj['type'] = 'msg';
	client.write(JSON.stringify(obj));
	}
	rl.prompt();
});
