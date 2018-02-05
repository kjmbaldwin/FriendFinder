var friendsArray = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res){
        res.json(friendsArray);
    });

    app.post("/api/new", function(req, res){
        
        var bestFriend = null;

        for (let i = 0; i < friendsArray.length; i++) {
            
            var currentFriend = friendsArray[i];
            var totalDifference = 0;

            if(!bestFriend){
                bestFriend = {
                    difference: 9999, 
                    friend: currentFriend
                }
            };

            for (let j = 0; j < currentFriend.scores.length; j++) {

                var friendScore = parseInt(currentFriend.scores[j]); 
                var myScore = parseInt(req.body.scores[j]);

                totalDifference += Math.abs(friendScore - myScore);

                console.log("total differnece: " + totalDifference);

                if (bestFriend.difference > totalDifference){
                    bestFriend = {
                        difference: totalDifference, 
                        friend: currentFriend
                    }
                };
            };
        }
        console.log("bestFriend: ", bestFriend.friend);
        
        
        friendsArray.push(req.body);
        console.log(req.body);

        res.json(bestFriend.friend);
    });

};