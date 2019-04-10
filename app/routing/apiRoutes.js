var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

//friendsArray data of friends.js imported
var friendsArray = require("../data/friends");

//this will transfer the data to server.js
module.exports = function(app) {
   
  // view list of friends
     app.get("/api/friends", function(req, res) {
      console.log(res)
       res.json(friendsArray);
     });
   

 // add friends
     app.post("/api/friends", function(req, res) {

  });


}