var friends = require("../data/friends.js");

module.exports = function(app) {
    // Return all friends found in friends.js as JSON
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    // Post route to handle incoming survey results. This route will also be used to handle the compatibility logic
    app.post("/api/friends", function(req, res) {
        var user = req.body;
        var userScore = req.body.scores;
        var minimumDifference = 1000;
        var totalDifference = 0;
        var bestFriend;

        // Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			// Compute differenes for each question
			var difference = 0;
			for (var x = 0; x < userScore.length; x++) {
                difference = Math.abs(friends[i].scores[x] - userScore[x]);
                totalDifference += difference;
			}

			// If lowest difference, record the friend match
			if (totalDifference < minimumDifference) {
                minimumDifference = totalDifference;
                bestFriend = i;
            }
            
            totalDifference = 0;
		}

        // Add new user
        friends.push(user);

		// Send appropriate response
        res.send(friends[bestFriend]);
    });
};
