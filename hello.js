var http = require("http");
http.createServer(function (request,response){
	response.writeHead(200,{'Content-type':"text/plain"});
	response.end("Hello man,I am nodejs!");

}).listen(8888)

console.log("server running on http://0.0.0.0:8888")
