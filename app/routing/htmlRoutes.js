
var path = require("path");


module.exports = function(app) {
app.get("/survey", function(req, res) {
     res.sendFile(path.join(__dirname, "../public/survey.html"));
   });
 
   //wild card, will match anything, if it's a get req and doesn't match anything then it will match that page
   // If no matching route is found default to home
   // has to be the last one
   app.get("*", function(req, res) {
     res.sendFile(path.join(__dirname, "../public/home.html"));
   });
 };
