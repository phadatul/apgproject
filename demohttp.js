var http = require('http');
var url = require('url');

http.createServer(function(request, response) {
    var data = url.parse(request.url, true).query;
    var num = data.username;
    var ans = 1;
    for (i = num; i > 0; i--) {
        ans = ans * i;
    }
    response.write("Factorial is:" + ans);

    response.end();
}).listen(1234);


console.log("Server is running at port no 1234, to stop the server please hit ctrl c.......");