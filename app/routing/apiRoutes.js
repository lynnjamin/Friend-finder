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

      var userTotal = [];
      var friendTotal = [];

    for (var i = 0; i < friendsArray.length; i++){
      console.log(friendsArray[i].score)
      for (var j = 0; j < friendsArray[i].score.length; j++){
        console.log(friendsArray[i].score[j]);
      
    }
  }
 
  });


}