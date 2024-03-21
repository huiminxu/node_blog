const fs = require('fs');
const path = require('path');


//生成 writestream
function createWriteStream(fileName) {
    const fullName = path.join(__dirname, '../','../','logs',fileName);
    const writeStream = fs.createWriteStream(fullName, {flags: 'a'});
    return writeStream;

}

const accessWriteStream = createWriteStream('access.log');

//写访问日志


function access(log){
    writeLog(accessWriteStream,log);
}
function writeLog(writeStream,log){
    writeStream.write(log + '\n');
}

module.exports = {
    access
}

// access(`${req.method}--${req.url}--${req.headers['user-agent']}`)