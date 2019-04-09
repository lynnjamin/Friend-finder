var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var friendsData = require("../data/friends");

//this will transfer the data to 
module.exports = function(app) {
   
  // view list of friends
     app.get("/api/friends", function(req, res) {
       res.json(friendsArray);
     });
   

 // add friends
     app.post("/api/friends", function(req, res) {
     
     });


}