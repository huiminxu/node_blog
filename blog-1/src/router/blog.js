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
const {getList} = require('../controller/blog')
const { SuccessModel} = require('../model/resModel')
const handleBlogRouter = (req,res) => {
    const method =req.method;

    if(method ==='GET' && req.path ==='/api/blog/list'){
        // return {
        //     msg:'这是获取博客列表的接口'
        // }
        const author = req.query.author;
        const keyword = req.query.keyword;
       const listData =   getList(author,keyword)
       return new SuccessModel(listData);
    }

    if(method ==='GET' && req.path ==='/api/blog/detail'){
        return {
            msg:'这是获取博客详情的接口'
        }
    }
    if(method ==='POST' && req.path ==='/api/blog/new'){
        return {
            msg:'这是新建博客的接口'
        }
    }
}