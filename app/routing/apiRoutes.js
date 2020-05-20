// Get route to display json of all friends
app.get("/api/friends", function(req, res) {
    return res.json(
        // Array of objects of friends
    );
});

// Post route to handle incoing survey results
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend);
    friendArray.push(newFriend);
    res.json(newFriend);
});