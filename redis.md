# 前提：问题？
1. 目前 session 变量，放在 nodejs 进程内存中
2. 进程内存有限，如果大量用户同时登录，会占用大量内存，导致 nodejs 进程崩溃
3. 进程之间内存没法共享，所以，将 session 变量，存储在 redis 中
3. redis 是一个 key-value 存储，可以存储 session 变量
3. 为了解决这个问题，可以将 session 变量，存储在 redis 中，这样，无论多少用户同时登录，都不会占用过多内存

# Redis

## 安装
brew install redis
## 启动
redis-server
## 命令
redis-cli
## 用法
set name zfpx
get name
keys *
del name

# nodejs 使用 redis
app.js 中，引入 redis 模块
var redis = require('redis');
var redisClient = redis.createClient();
redisClient.on('error', function (err) {
console.log('Error ' + err);
return;
});
redisClient.on('connect', function () {
})
redisClient.set('name', 'zfpx');
redisClient.get('name', function (err, reply) {
})

