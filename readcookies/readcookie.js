var http = require('http');

http.createServer(function(req,rep){
	rep.writeHead(200,{'Content-type':"text/plain"});
	var Cookies = {};
	    req.headers.cookie && req.headers.cookie.split(';').forEach(function( Cookie ) {
        var parts = Cookie.split('=');
        Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
    });
    console.log(Cookies);
    console.log(req.headers);
	rep.end('hh');
}).listen(9999);

