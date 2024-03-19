const {exec} = require('../db/mysql')
const loginCheck =({username, password})=>{
   return  exec(`select * from user where username='${username}' and password='${password}'`).then((rows)=>{
        return rows[0] || {}
    });
    
}
module.exports = {
    loginCheck
}