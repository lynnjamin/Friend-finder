var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;


app.listen(PORT, function() {
     console.log("App listening on PORT " + PORT);
   });
   

// routes to files
   require("./routing/apiRoutes")(app);
   require("./routing/htmlRoutes")(app);
   
