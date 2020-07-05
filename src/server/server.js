//1 导入HTTP模块
const http=require("http");
//2 创建HTTP服务
const server=http.createServer(function(require,response){
    // response.end("ok");
    var json=[
        {id:"1",name:"fxg",age:18},
        {id:"1",name:"fxg",age:18},
        {id:"1",name:"fxg",age:18},
        {id:"1",name:"fxg",age:18},
        {id:"1",name:"fxg",age:18},
    ]
    response.end(JSON.stringify(json));
});
//开启服务监听
server.listen("3000","127.0.0.1",function(){
    console.log("开启服务监听，端口号是3000");
    
})