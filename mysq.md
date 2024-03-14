## 安装mysql
brew install mysql

## 重启mysql
启动服务 brew services start mysql
重新启动 brew services restart mysql

## 连接mysql
mysql -uroot -p

## 取消连接
exit;

### 数据库操作
show databases;
use mysql;



## 关闭mysql
停止mysql服务：brew services stop mysql
