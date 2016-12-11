'use strict'

var express = require('express');
var app = express();

//used to get the directiory name
var dirname = __dirname.slice(0, (__dirname.length - 3));
app.get('/', function(req, res){
	res.sendFile(dirname + 'public/views/index.html');
	console.log(__dirname);
});


app.use('/js', express.static(dirname + "public/js/"));

// logging middleware
var num = 0;
app.use(function (req, res, next) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var method = req.method;
    var url = req.url;

    console.log((++num) + ". IP " + ip + " " + method + " " + url);
    next();
});

app.listen(3000, function(req, res){
	console.log("I\'m listening");
});
