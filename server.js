var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;


app.listen(PORT, function() {
     console.log("App listening on PORT " + PORT);
   });
   

//function app imported to get and post friends data
   require("./app/routing/apiRoutes")(app);
//function app imported  to link home and survey pages
   require("./app/routing/htmlRoutes")(app);
   
