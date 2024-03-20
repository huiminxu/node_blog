
const { createClient } =require('redis');

async function newClient(){
    const client = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();
}

async function set(key,val){
    if(typeof val ==='object'){
        val = JSON.stringify(val);
    }
    await client.set(key,val);
}

async function get(key){
    const valStr = await client.get(key);
    try{
        return JSON.parse(valStr);
    }catch(err){
        return valStr;
    }
}
// await client.disconnect();
newClient();

module.exports = {
    set,
    get
}
