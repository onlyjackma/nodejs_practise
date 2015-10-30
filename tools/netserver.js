var net = require('net');
var server = net.createServer(function(connection){
	console.log('client connected');
	connection.on('end',function(){
		console.log('client close the connection');
	});

	connection.write("hello man! \r\n");
	connection.pipe(connection);

	connection.on('data',function(data){
		console.log("Data from :"+connection.remoteAddress +"! data"+ data.toString());
	});
});
	
	


server.listen(8888,5,function(){
	console.log('server is listening');
});
