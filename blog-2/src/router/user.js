const {loginCheck} = require('../controller/user');
const { SuccessModel,ErrorModel } = require('../model/resModel');
const handleUserRouter = (req,res) => {
    const method =req.method;

    if(method ==='POST' && req.path ==='/api/user/login'){
        // return {
        //     msg:'登录接口'
        // }
        console.log(req.body);
       let res = loginCheck(req.body)
        return res.then((result) => {
            if(result){
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
}
module.exports={
    handleUserRouter
}