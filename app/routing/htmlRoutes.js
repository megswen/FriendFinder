var path = require("path");

module.exports = function(app) {
	// Get route that defaults to the home page
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    // Get route that displays survey page
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
};
