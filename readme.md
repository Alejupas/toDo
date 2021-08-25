# json and http servers install

start JSON server: json-server --watch db.json

http-server: http-server [path] [options]
[path] defaults to ./public if the folder exists, and ./ otherwise.

run http-server: http-server -S -C cert.pem
enabling ssl and certificate

local: http://localhost:3000/posts/1
