var friends = require("../data/friends.js");

module.exports = function(app) {
    // Return all friends found in friends.js as JSON
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    // Post route to handle incoming survey results. This route will also be used to handle the compatibility logic
    app.post("/api/friends", function(req, res) {
        var userData = req.body;
        var userScore = req.body.scores;
        var minimumDifference = 1000;
        var bestFriendIndex = 0;
        
        // Loop through each friend and add scores together
        for(var i = 0; i < friends.length; i ++){
            var friendScore = friends[i].scores;
            for (var questionNum = 0; questionNum < userScore.length; questionNum ++){
                var difference = Math.abs(friendScore[questionNum] - userScore[questionNum]);
                var totalDifference = 0;
                totalDifference += difference;
            }
        }

        // if there is a new best match, change the best friend index and set the new minimum score for next iteration comparisons
        if(totalDifference < minimumDifference) {
            bestFriendIndex = i;
            minimumDifference = totalDifference;
        }

        // Send match back to browser
        friends.push(userData);
        // After finding match, add user to friend array
        res.json(friends[bestFriendIndex]);
    });
};