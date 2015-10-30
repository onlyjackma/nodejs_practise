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
	id:'0000',
	name:'anonymous'
}


function help(){
	console.log("	* Please Set Your ID and NAME First Then Login!");
	console.log("	1 Set ID Like This #ID:12345");
	console.log("	2 Set Name Like This #NAME:jack stolen");
	console.log("	3 User Command #LOGIN To Login To Server!");
}

help();

client.connect(PORT,HOST,function(){
	console.log('Connect to Server OK !');
	//client.write(JSON.stringify(obj));
	rl.prompt();
});

client.on('data',function(data){
		console.log(data.toString());
		rl.prompt();
});

client.on('end',function(){
		console.log("Server closed");
});

rl.on('line',function(data){
	switch(data.trim().split(':')[0]){
		case '#LOGIN':
			obj['type'] = 'login';
			if(obj['id'] == '0000'){
				help();
				break;
			}
			client.write(JSON.stringify(obj));
			break;
		case '#ID':
				obj['id'] = data.trim().split(":")[1];
			break;
		case '#NAME':
			obj['name'] = data.trim().split(":")[1];
			break;
		case '#HELP':
				help();
			break;
		case '?':
				help();
			break;
		default:
			if(obj['id'] == '0000'){
				help();
				break;
			}
			if(data){
				if(data.trim().substring(0,1) == '@'){
					obj['dest_id'] = data.trim().substring(1,data.trim().length);
				}else{
					obj['msg'] = data;
					obj['type'] = 'msg';
					client.write(JSON.stringify(obj));
				}
			}
			//rl.prompt();
			break;
	}
	console.log(JSON.stringify(obj));
	rl.prompt();
});
