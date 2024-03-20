const querystring = require('querystring');
const {handleBlogRouter} = require('./src/router/blog');
const {handleUserRouter} = require('./src/router/user');
const {get,set} = require('./src/db/redis');
//session 数据（重启数据就没了）
// const SESSION_DATA ={};
//处理postData
const getPostData = (req)=>{
    const promise = new Promise((resolve,reject)=>{
        if(req.method==='POST'){
            let postData = '';
            req.on('data',(chunk)=>{
                postData += chunk;
            })
            req.on('end',()=>{
                if(!postData){
                    resolve({})
                    return;
                }
                resolve(JSON.parse(postData));
            })
        }else{
            resolve({})
        }
    })
    return promise;
}
const serverHandle = (req,res) =>{
    res.setHeader('Content-type','application/json');
    const url =req.url;
    req.path = url.split('?')[0];

    req.query = querystring.parse(url.split('?')[1])

    //处理请求 cookie
    req.cookie={};
    const cookieStr = req.headers.cookie || '';
    cookieStr.split(';').forEach((item)=>{
        if(!item){
            return;
        }
        const arr = item.split('=');
        const key = arr[0].trim();
        const val = arr[1].trim();
        req.cookie[key] = val;
    })


    //解析session
    let needSetCookie = false;
    let userId = req.cookie.userid;

    // if(userId){
    //     if(!SESSION_DATA[userId]){
    //         SESSION_DATA[userId]={}
    //     }
    // }else{
    //     needSetCookie = true;
    //     userId =`${Date.now()}_${Math.random()}`;
    //     SESSION_DATA[userId]={}
    // }

    // req.session = SESSION_DATA[userId];


    if(!userId){
        needSetCookie = true;
        userId =`${Date.now()}_${Math.random()}`;
        set(userId,{})
    }
    req.sessionId = userId;
    req.session = get[userId];
    //处理postData
    getPostData(req).then((postData)=>{
        req.body = postData;
        // 处理blog 路由
        const blogData = handleBlogRouter(req,res);
        if(blogData){
            blogData.then(data=>{
                if(needSetCookie){
                    // expires
                    res.setHeader('Set-Cookie',`userid=${userId};path=/;httpOnly;`)
                }
                res.end(JSON.stringify(data))
            })
            return;
        }
        // 处理user 路由
        // const userData = handleUserRouter(req,res);
        // if(userData){
        //     res.end(JSON.stringify(userData))
        //     return;
        // }
        const userData = handleUserRouter(req,res);
        if(userData){
            userData.then(data=>{
                if(needSetCookie){
                    // expires
                    res.setHeader('Set-Cookie',`userid=${userId};path=/;httpOnly;`)
                }
                res.end(JSON.stringify(data))
            })
             return;
        }
        //未命中路由，返回 404

        res.writeHead(404,{'Content-type':'text/plain'});
        res.write('404 Not Found');
        res.end();
    })

}
 module.exports = serverHandle; 