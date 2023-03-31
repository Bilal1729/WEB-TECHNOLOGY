const http= require('http');
url= require('url');
http.createServer((req,res)=>{
    
    console.log(req.url);
    var q= url.parse(req.url,true).query;
    console.log(q);
    console.log(q.R);
    var R = Number(q.R);
    var Area=(3.14*R*R);
    res.write("The area of the Cirle is "+Area);
    res.end();
    
}).listen(8080);