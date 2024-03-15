const env = process.env.NODE_ENV;

let MYSQL_CONF;

if(env==='dev'){
    MYSQL_CONF={
        host:'localhost',
        user:'root',
        password:'',
        database:'myblog'
    }
}

module.exports={
    MYSQL_CONF
}