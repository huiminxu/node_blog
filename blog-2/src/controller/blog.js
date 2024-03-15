const { exec} = require('../db/mysql')
const getList=(author,keyword) => {
    let sql = 'select * from blog where 1=1 ';
    if(author){
        sql+=`and author='${author}' `
    }
    if(keyword){
        sql+=`and title like '%${keyword}%' `
    }
    sql+=' order by createtime desc';
    //返回的是promise
    return exec(sql);
}
const getDetail=(id) => {
    return exec(`select * from blog where id=${id}`).then(rows=>{
        return rows[0]
    })    
        // return {
        //     id,
        //     title:'hello world',
        //     author:'xuhuimin',
        //     date:'2019-06-01'
        // }
}

const newBlog=({title,content,author}) => {
    let createtime = Date.now();
    return exec(`insert into blog(title,content,author,createtime) values('${title}','${content}','${author}','${createtime}')`).then(rows=>{
        return  {
            id: rows.insertId
        }
    });
        // return {
        //     id:Math.random(),
        //     title,
        //     author, 
        //     date:'2019-06-01'
        // }
}

const updateBlog=(id,body) => {
    return exec(`update blog set title='${body.title}',content='${body.content}',author='${body.author}' where id=${id}`).then(rows=>{
        // return  {
        //     update:rows.affectedRows
        // }
        if(rows.affectedRows>0){
            return true
        }else{
            return false
        }
    });
        // return {
        //     id,
        //     title:body.title,
        //     author:body.author, 
        //     date:'2019-06-01'
        // }
}

const delBlog = (id) => {
    return exec(`delete from blog where id=${id}`).then(rows=>{
        // return  {
        //     delete:rows.affectedRows
        // }
        if(rows.affectedRows>0){
            return true
        }else{
            return false
        }
    });
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}