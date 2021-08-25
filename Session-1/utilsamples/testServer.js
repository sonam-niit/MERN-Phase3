var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("<h1>Hello World</h1>");
    res.write(req.url);
    res.end();
}).listen(8080);