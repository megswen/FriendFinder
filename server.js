// Dependencies
var express = require("express");
var path = require("path");

// Setting up Express app
var app = express();
var PORT = process.env.PORT || 3001;

// Setting up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});