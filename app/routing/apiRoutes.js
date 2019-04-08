var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// routes
app.get("/api/friends", function(req, res){
     res.sendFile(path_join(__dirname, ))

})