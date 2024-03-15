 const mysql = require('mysql');
const {MYSQL_CONF}=require('../conf/db');

 const con = mysql.createConnection(MYSQL_CONF);

 con.connect();

 //统一执行sql 的函数

 function exec(sql){
    let promise = new Promise((resolve,reject)=>{
        con.query(sql,(err,res)=>{
            if(err){
                reject(err);
            }else{
                resolve(res);
            }
        })
    })
    return promise;
    // con.query(sql,(err,res)=>{
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log(res);
    //     }
    // })
 }

 module.exports={
    exec
 }