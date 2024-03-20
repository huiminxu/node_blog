# nginx 
## 安装
brew install nginx

## 操作 nginx

nginx
nginx -s stop
nginx -s reload


## 测试配置文件格式是否正确
nginx -t



## nginx 配置文件

1. worker_processes 启动几个进程
2.  server 配置
路径 sudo vi/usr/local/etc/nginx/nginx.conf

文件内容
    worker_processes  2;
    server {
        listen 8080;
        server_name localhost;
        location / {
            proxy_pass http://localhost:8001;
        }
        location /api/ {
            proxy_pass http://localhost:8000;
            proxy_set_header Host $host;
        }
    }