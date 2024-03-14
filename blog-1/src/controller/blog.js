const getList=(author,keyword) => {
        return [{
            id:1,
            title:'hello world',
            author:'xuhuimin',
            date:'2019-06-01'
        }]
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