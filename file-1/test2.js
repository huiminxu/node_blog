var fs = require('fs');
var path=require('path');
var fileName1 = path.resolve(__dirname, 'data2.txt');
var fileName2 = path.resolve(__dirname, 'bak2.txt');

var readStream = fs.createReadStream(fileName1);

//读取到数据
let data   = '';
readStream.on('data', function(chunk) {
    console.log('读取到数据：' + chunk);
    data+=chunk.toString();
});

// 读取完毕
readStream.on('end', function() {
    console.log(data);
});


// var writeStream = fs.createWriteStream(fileName2);
//readStream 的内容放入 writeStream 中
// readStream.pipe(writeStream);

//写入完毕
// readStream.on('end', function() {
//     console.log('写入完毕');
// });

// writeStream.on('finish', function() {
//     console.log('写入完毕');
// });

