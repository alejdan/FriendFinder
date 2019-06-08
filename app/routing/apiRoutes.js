var friends = require("../data/friends")

module.exports = function (app) {

    // A GET route with the url`/api/friends`.This will be used to display a JSON of all possible friends.

    app.get("/api/friends", function (req, res) {

        res.json(friends);

    });


    // A POST routes`/api/friends`.This will be used to handle incoming survey results.This route will also be used to handle the compatibility logic.

    app.post("/api/friends", function (req, res) {

        //Take in the result from survey.html
        const scores = req.body.scores;
        //Take friends and isolate the results
        const friendScores = friends.map((x)=>x.scores);
        console.log(friendScores);
        //Compare user results with friends results

        var totalScores = [];

        for (var i=0; i < friendScores.length; i++) {
            //Save the total scores in an array
            totalScores.push(compareScores(friendScores[i], scores));
        }
        //Obtain the minimum from said array
        var lowestScore = Math.min.apply(null, totalScores);

        //Return picture and name of the most compatible friend.

        indexOfFriend = totalScores.indexOf(lowestScore);
        
        res.send(friends[indexOfFriend]);

    });


}

function compareScores (arr1, arr2) {

    var totalScore = 0;

    for (var i = 0; i < arr1.length; i++) {
        totalScore += Math.abs(arr1[i] - arr2[i]);
    }

    return totalScore;

}