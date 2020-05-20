// Dependencies
var express = require("express");
var path = require("path");

// Setting up Express app
var app = express();
var PORT = 3000;

// Setting up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// On click submit button function that takes the user input and stores it as an object

// Function that stores each friend object in the friendsArray

// Convert each user's results into a simple array of 10 numbers

// Compare the difference between current user's scores against those from other users, question by question
    // Add up the differences to calculate the totalDifference
    // Use absolute value of differences
    // The closest match will be the user with the least amount of difference

// Display result as modal pop-up (name and picture of closest match)




























// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});