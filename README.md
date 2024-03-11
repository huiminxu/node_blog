# node_blog

## API 文档开发
### HTTP 请求概述
    *   DNS 解析，建立 TCP 连接，发送 HTTP 请求
    *   Server 接收请求，解析请求，执行业务逻辑，返回响应
    *   Client 接收响应，解析响应，处理响应，完成业务  

## nodejs 处理 http 请求
###  get  querystring
    *   querystring.parse()
    *   querystring.stringify()
### post 请求 postdata
    *   body-parser
### demo
```js
    const http= require('http');
    const server = http.createServer(function (req,res){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Hello World');
    })
    server.listen(8080);
```


## nodemon 监听文件变化