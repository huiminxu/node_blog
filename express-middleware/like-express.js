const http = require('http');
const slice = Array.prototype.slice;

class LikeExpress {
    constructor() {
        this.routes = {
            all: [],
            get: [],
            post: []
        }
    }
    register(path) {
        console.log('register',arguments);
        const info = {}
        if(typeof path==='string'){
            info.path = path;
            info.stack=slice.call(arguments,1);
        }
        if(typeof path==='function'){
            info.path = '/';
            info.stack=slice.call(arguments,0);
        }
        return info;
    }
    use(){
        const info = this.register.apply(this,arguments);
        this.routes.all.push(info);
    }
    get(){
            const info = this.register.apply(this,arguments);
            this.routes.get.push(info);
    }
    post(){
            const info = this.register.apply(this,arguments);
            this.routes.post.push(info);
    }
    match(method,path){
        let stack=[];
        if(path==='/favicon.ico'){
            return stack;
        }
        let curRoutes=[];
        curRoutes = curRoutes.concat(this.routes.all);
        curRoutes = curRoutes.concat(this.routes[method]);
        curRoutes.forEach(info=>{
            if(path.indexOf(info.path)===0){
                stack = stack.concat(info.stack);
            }
        })
        return stack;
    }
    handle(req,res,stack){
        console.log('handle',stack)
        const next = ()=>{
            const middleware = stack.shift();
            console.log('next',middleware);
            if(middleware){
                middleware(req,res,next);
            }
        }
        next();
    }
    callback(){
        return (req,res)=>{
            res.json = (data)=>{
                res.setHeader('Content-Type','application/json');
                res.end(
                    JSON.stringify(data)
                )
            }
            const method = req.method.toLowerCase();
            const stack = this.match(method,req.url);
            this.handle(req,res,stack);
        }
    }
    listen(...args){
        const server = http.createServer(this.callback());
        server.listen(...args);
    }
}

module.exports = () => {
    return new LikeExpress();
}