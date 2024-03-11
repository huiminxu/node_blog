
const http= require('http');
const server = http.createServer(function (req,res){
    const url = req.url;
    console.log(url);
    let postData=""
    req.on('data',chunk=>{
        postData +=chunk.toString()
    })
    req.on('end',chunk=>{
        res.end(postData);
    })
})
server.listen(8080); 