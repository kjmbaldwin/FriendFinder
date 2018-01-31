var friendsArray = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res){
        res.json(friendsArray);
    });

    app.post("/api/new", function(req, res){
        
        for (let i = 0; i < friendsArray.length; i++) {
            
            var currentFriend = friendsArray[i];
            var totalDifference = 0;

            for (let j = 0; j < currentFriend.scores.length; j++) {

                var friendScore = parseInt(currentFriend.scores[j]); 
                var myScore = parseInt(req.body.scores[j])

                totalDifference += Math.abs(friendScore - myScore);

                console.log("total differnece: " + totalDifference);
            }
        }
        
        friendsArray.push(req.body);
        console.log(req.body);
    });

};