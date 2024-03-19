const {loginCheck} = require('../controller/user');
const { SuccessModel,ErrorModel } = require('../model/resModel');
const handleUserRouter = (req,res) => {
    const method =req.method;

    if(method ==='GET' && req.path ==='/api/user/login'){
        // return {
        //     msg:'登录接口'
        // }
        console.log(req.query);
       let res = loginCheck(req.query)
        return res.then((result) => {
            if(result){
                req.session.username=result.username;
                req.session.realname=result.realname;
                return new SuccessModel(result)
            }else{
             return new ErrorModel('登录失败')

            }
           
       })

    //    if(res){
    //     return new SuccessModel(res)
    //    }else{
    //     return new ErrorModel('登录失败')
    //    }
    }

    //登录验证的测试
    if(method==='GET' && req.path==='/api/user/login-test'){
        if(req.session.username){
            return Promise.resolve(
                new SuccessModel({
                    username: req.session.username
                })
            )
        }
        return Promise.resolve(
            new ErrorModel('尚未登录')
        )
    }
}
module.exports={
    handleUserRouter
}