var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/text'});
    fs.readFile('./index.html', null, function(error, data){
        if(error) {
            response.writeHead(404);
            response.write('Page Not Found...');
        }else{
            response.write(data);
        }
            response.end();
    });
}

http.createServer(onRequest).listen(8000);

/*
module.exports.printMsg = function() {
    console.log('start...');
}
*/