/**
 * Created by Muggi on 20-03-2015.
 */
var express = require('express');
var http = require('http');
var app = express();

app.get('/allPlayers', function(req, res) {
    var url = "http://footballpool.dataaccess.eu/data/info.wso/AllPlayerNames/JSON/debug?bSelected="
    http.get(url, function (response) {
        var buffer = "";
        response.setEncoding("UTF8");
        response.on("data", function (data) {
            buffer += data;


        });
        response.on("end", function () {
            var list = JSON.parse(buffer);
            res.type('application/json'); // set content-type
            res.send(list); // send text response
        });

    });

});
app.get('/AllPlayers/id/:id', function(req, res) {
    var url = "http://footballpool.dataaccess.eu/data/info.wso/AllPlayerNames/JSON/debug?bSelected="
    http.get(url, function (response) {
        var buffer = "";
        response.setEncoding("UTF8");
        response.on("data", function (data) {
            buffer += data;


        });
        response.on("end", function () {
            var list = JSON.parse(buffer);
            for(var i = 0;i<list.length;i++){
                var id = req.param("id");
                if(list[i].iId == id){
                    res.type('application/json'); // set content-type
                    res.send(list[i]); // send text response
                }
            }
        });

    });
});

app.get('/AllPlayers/country/:country', function(req, res) {
    var url = "http://footballpool.dataaccess.eu/data/info.wso/AllPlayerNames/JSON/debug?bSelected="
    http.get(url, function (response) {
        var buffer = "";
        response.setEncoding("UTF8");
        response.on("data", function (data) {
            buffer += data;


        });
        response.on("end", function () {
            var list = JSON.parse(buffer);
            var array = [];
            for(var i = 0;i<list.length;i++){
                var country = req.param("country");
                if(list[i].sCountryName == country){
                    array.push(list[i]);

                }
            }
            res.type('application/json'); // set content-type
            res.send(array); // send text response
        });

    });
});

app.listen(process.env.PORT || 80);