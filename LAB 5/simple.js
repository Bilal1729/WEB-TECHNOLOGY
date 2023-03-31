const http= require('http');
url= require('url');
http.createServer((req,res)=>{
    
    console.log(req.url);
    var q= url.parse(req.url,true).query;
    console.log(q);
    console.log(q.P);
    console.log(q.I);
    console.log(q.T);
    var P = Number(q.P);
    var I = Number(q.I);
    var T = Number(q.T);
    var SI = (P*I*T)/100;
    var amount=SI+P;
    res.write("The Simple Interest for the given data is "+SI);
    res.write("The Total Aount "+amount);
    res.end();
    
}).listen(8080);