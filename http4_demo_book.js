const http = require("http");
//server监听事件
const server = http.createServer(function(req,res){
    res.writeHead(200,{
        'content-type' : 'text/plain'
    });
    res.end('hewllo node.js')
});

server.listen(3000,function(){
    console.log("listen  port 3000")
});
let reqData = "";

http.request({
	"host":"127.0.0.1",
	"port":"3000",
	"method":"get"},function(res){
	res.on('data',function(chunk){
		reqData += chunk;
	});
	res.on('end',function(){
		console.log(reqData);
	})
}).end();
