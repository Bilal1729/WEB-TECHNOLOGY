http = require('http');
url = require('url');
querystring = require('querystring');

function onRequest(request, response) {
    var path = url.parse(request.url).pathname;
    console.log('Request for ' + path + 'received.');
    var query = url.parse(request.url).query;
    console.log(query);
    var name = querystring.parse(query)["usrnm"];
    var email = querystring.parse(query)["email"];
    var pass = querystring.parse(query)["psw"];
    response.write('Hello ' + name + ', email ' + email+', Password '+pass);
    response.end();

}

http.createServer(onRequest).listen(8080);
console.log('Server started..');