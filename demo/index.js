const http= require('http');
const server = http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    // response.writeHeader(200, {"Content-Type": "text/html"});  
    // response.write(html);  
    res.end('Hello world');  
})
server.listen(8080); 