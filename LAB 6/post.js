http = require('http');
url = require('url');
querystring = require('querystring');
var qs,name,email;
http.createServer(function (req,res){
    var data1 = '';
    req.on('data',function(chunk){
        console.log(chunk);
        data1 += chunk;
        console.log("Data is string format"+data1);
    });
    req.on('end',function (){
        qs = querystring.parse(data1);
        console.log(qs);
        name = qs['usrnm'];
        email = qs['email'];
        pass = qs['psw'];
        res.write('Hello '+name+' your mail id is '+email+' and your password is '+pass);
        res.end();
    });
}).listen(8000);
console.log('Server started..');