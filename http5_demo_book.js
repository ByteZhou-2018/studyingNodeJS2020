const http = require("http");
let reqData = "";

http.get({
	"host":"127.0.0.1",
	"port":"3000",
},function(res){
	res.on("data",function(chunk){
		reqData += chunk;
	});
	res.on("end",function(){
		console.log(reqData);
	});
}).end();

var sever = http.createServer(function(req,res){
//	resp.writeHead(200,{'content-type':'text/html;charset=utf-8'});
	res.writeHead(200,{"content-type":"text/plain;charset=utf-8"})
	res.end("断剑重铸之日，骑士归来之时！")
});

sever.listen(3000,function(){
	console.log("正在监听端口127.0.0.1：3000")
})