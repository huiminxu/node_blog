# 日志
## 日志拆分
  按时间划分日志文件： 2019-02-10.access.log
  实现方式：linux 的 crontab 命令，即定时任务


### crontab 介绍
  crontab
  * * * * * command
  第一个* 
  第二个* 表示每天第几个小时触发
  第三个* 表示每天执行一次
  第四个* 表示每月执行一次
  第五个* 表示每周执行一次


#### shell
将access.log 拷贝并重命名为 2019-02-10.access.log，清空access.log ，继续积累日志
命令：
#！/bin/bash
cd /home/xxx/
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log


#### 执行脚本
crontab -e
* 0 * * * sh /home/xxx/copy.sh


crontab -l  // 查看当前有哪些任务






## 日志分析
    nodejs readline 
### 使用
```js
    const readline = require('readline');
    const fs = require('fs');
    const path = require('path');
    const logPath = path.join(__dirname, 'access.log');
    const rl = readline.createInterface({
        input: fs.createReadStream(logPath),
        <!-- output: process.stdout,
        terminal: false -->
        // 读取文件的起始位置，从文件开头读取
        <!-- resume: 0 -->
        // 读取文件的结束位置，从文件结尾读取
        <!-- resume: fs.statSync(logPath).size -->
    })
    let chromeNUm=0;
    let num=0;
    rl.on('line', function (line) {
            console.log(line);
            if(line.indexOf('Chrome')>-1){
                chromeNUm++;
            }
            if(line.indexOf('Mozilla')>-1){
            
                console.log(line);
            }
            num++;
    })
    rl.on('close', function () {
        console.log('total num is ' + num);
        console.log('chrome num is ' + chromeNUm);
    }
```