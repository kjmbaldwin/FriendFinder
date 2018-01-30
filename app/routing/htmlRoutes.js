//dependencies
var path = require('path');

//export routes to pass into express
module.exports = function(app) {
    
    //home route
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //survey route
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};