/**
 * Created by Muggi on 20-03-2015.
 */
var express = require('express');
var app = express();
var array = [];
var player1 = {
    id : "1",
    name : "James Rodríguez",
    country : "Columbia"
    };
array.push(player1);

var player2 = {
    id : "2",
    name : "Thomas Mueller",
    country : "?"
};
array.push(player2);

var player3 = {
    id : "3",
    name : "Messi",
    country : "?"
};
array.push(player3);

var player4 = {
    id : "4",
    name : "Neymar",
    country : "?"
};
array.push(player4);

var player5 = {
    id : "5",
    name : "van Persie",
    country : "?"
};
array.push(player5);


app.get('/allPlayerNames', function(req, res) {
    res.type('application/json'); // set content-type
    res.send(array); // send text response
});

app.listen(process.env.PORT || 80);
