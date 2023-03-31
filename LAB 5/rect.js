const http= require('http');
url= require('url');
http.createServer((req,res)=>{
    
    console.log(req.url);
    var q= url.parse(req.url,true).query;
    console.log(q);
    console.log(q.L);
    console.log(q.B);
    var L = Number(q.L);
    var B = Number(q.B);
    var Area=L*B;
    res.write("The area of the rectange is "+Area);
    res.end();
    
}).listen(8080);