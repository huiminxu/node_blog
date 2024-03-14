// const handleBlogRouter = (req,res) => {
//     const method =req.method;

//     if(method ==='GET' && req.path ==='/api/blog/list'){
//         return {
//             msg:'这是获取博客列表的接口'
//         }
//     }

//     if(method ==='GET' && req.path ==='/api/blog/detail'){
//         return {
//             msg:'这是获取博客详情的接口'
//         }
//     }
//     if(method ==='POST' && req.path ==='/api/blog/new'){
//         return {
//             msg:'这是新建博客的接口'
//         }
//     }
// }
const {getList,getDetail,newBlog,updateBlog } = require('../controller/blog')
const { SuccessModel} = require('../model/resModel')
const handleBlogRouter = (req,res) => {
    const method =req.method;

    if(method ==='GET' && req.path ==='/api/blog/list'){
        // return {
        //     msg:'这是获取博客列表的接口'
        // }
        const author = req.query.author;
        const keyword = req.query.keyword;
       const listData =  getList(author,keyword)
       return new SuccessModel(listData);
    }

    if(method ==='GET' && req.path ==='/api/blog/detail'){
        // return {
        //     msg:'这是获取博客详情的接口'
        // }
        let data = getDetail(req.query.id);
        return new SuccessModel(data);
    }
    if(method ==='POST' && req.path ==='/api/blog/new'){
        // return {
        //     msg:'这是新建博客的接口'
        // }

        console.log(req.body,'post')
          let data = newBlog(req.body);
        return new SuccessModel(data);

    }
    if(method ==='POST' && req.path ==='/api/blog/update'){
        console.log(req.body,'post')
        let  id = req.query.id;
        let  body = req.body;
        let  data = updateBlog(id,body);
        return new SuccessModel(data);
    }
}
module.exports={
    handleBlogRouter
}


//async await koa2的异步处理