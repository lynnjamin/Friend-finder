var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;


app.listen(PORT, function() {
     console.log("App listening on PORT " + PORT);
   });
   

// Routes - use get to go into directory

app.get("/", function(req, res) {
     res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
     res.sendFile(path.join(__dirname, "survey.html"));
});

// use post to add new profile

// DATA of questions //

