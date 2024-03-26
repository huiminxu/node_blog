const http = require('http');

function compose(middleware){
        return function(ctx){
            function dispatch(i){
                const fn = middleware[i];
                if(!fn){
                    return Promise.resolve();
                }
                return Promise.resolve(fn(ctx,dispatch.bind(null,i+1)));
            }
            return dispatch(0);
        }

}
class LikeKoa2 {
    constructor() {
        this.middleware = [];
    }
    use(fn){
        this.middleware.push(fn);
        return this;
    }
    createContext(req,res){
        const ctx = {
            req,
            res
        }
        return ctx;
    }
    handleRequest(ctx,fn){
        return fn(ctx);
    }
    callback(){
        const fn = compose(this.middleware);
        return (req,res) =>{
            const ctx = this.createContext(req,res);
            return this.handleRequest(ctx,fn);
        }
    }
    listen(...args){
        const server = http.createServer(this.callback());
        server.listen(...args);
    }
}
module.exports = LikeKoa2;