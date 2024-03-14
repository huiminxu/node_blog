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
 
#### 操作数据库
创建数据库 create database mydb;
展示数据库 show databases;
使用数据库 use mydb;
删除数据库 drop database mydb;
#### 操作表
创建表  create table mytable(id int, name varchar(20));
创建非空、自增主键表 create table mytable(id int primary key auto_increment, name varchar(20) not null);
新建记录 insert into mytable values(1,'张三'),(2,'李四');
修改记录 update mytable set name='王五' where id=2;
查询 select * from mytable;
模糊查询 select * from mytable where name like '%五%';
删除记录 delete from mytable where id=1;
删除表 drop table mytable;
分页查询语句 slect * from mytable limit 1,2;
## 关闭mysql
停止mysql服务：brew services stop mysql
