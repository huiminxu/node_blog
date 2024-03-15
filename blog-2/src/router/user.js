const {login} = require('../controller/user');
const { SuccessModel,ErrorModel } = require('../model/resModel');
const handleUserRouter = (req,res) => {
    const method =req.method;

    if(method ==='POST' && req.path ==='/api/user/login'){
        // return {
        //     msg:'登录接口'
        // }
        console.log(req.body);
       let res = login(req.body)
       if(res){
        return new SuccessModel(res)
       }else{
        return new ErrorModel('登录失败')
       }
    }
}
module.exports={
    handleUserRouter
}