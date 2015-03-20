/**
 * Created by Muggi on 20-03-2015.
 */
var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    var url = "http://www.iheartquotes.com/api/v1/random";
    var readline = require("readline");

    http.get(url, function (response) {
        var buffer = "";
        response.setEncoding("UTF8");
        response.on("data", function (data) {
            buffer = data;


        });
        response.on("end", function () {
            var quote = buffer.toString();
            res.write('<p>' + quote + '<p>');
            res.end();
        });
    });

});

var port = 80;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});