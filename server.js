//dependencies 
var express = require("express");
var bodyParser = require("body-parser"); 

//express server setup
var app = express();
var PORT = process.env.PORT || 8080;  //heroku port or local 8000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// require("./app/data/friends")(app);

//start server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  