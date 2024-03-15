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
        return {
            id,
            title:'hello world',
            author:'xuhuimin',
            date:'2019-06-01'
        }
}

const newBlog=(title,author) => {
        return {
            id:Math.random(),
            title,
            author, 
            date:'2019-06-01'
        }
}

const updateBlog=(id,body) => {
        return {
            id,
            title:body.title,
            author:body.author, 
            date:'2019-06-01'
        }
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog
}