const fs=require('fs');
const path=require('path');

const fileName = path.resolve(__dirname,'data.txt');


//写入文件

const content='这是新写入的内容\n';
const opt={
    flag:'a' //·     a追加写入
}

fs.writeFile(fileName,content,opt,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('写入成功');
    }
})

//读取文件
fs.readFile(fileName,{encoding:'utf8'},(err,data)=>{
    if(err){
        console.log(err);
    }else{
        //data 二进制、需要转换成字符串
        console.log(data);
    }
});


//判断文件是否存在
fs.exists(fileName,(exist)=>{
    console.log('exist',exist);
})

