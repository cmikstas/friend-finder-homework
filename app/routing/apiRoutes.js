var userData = require("../data/friends");


module.exports = function(app)
{
    app.get("/api/friends", function(req, res)
    {
        res.json(userData);
    });

    app.post("/api/friends", function(req, res)
    {
        let bestMatchDiff = 10000;
        let bestMatchIndex = 0;

        for (let i = 0; i < userData.length; i++)
        {
            //console.log(userData);
            let scoreDiff = 0;

            for (let j = 0; j < userData[i].scores.length; j++)
            {
                scoreDiff += Math.abs(userData[i].scores[j]-req.body.scores[j]);
                console.log(scoreDiff);
            }

            if (scoreDiff < bestMatchDiff)
            {
                bestMatchDiff = scoreDiff;
                bestMatchIndex = i;
            }
        }

        console.log(userData[bestMatchIndex]);

        userData.push(req.body);
        res.json(userData[bestMatchIndex]);
    });

    app.get("/api/clear", function(req, res)
    {
      while (userData.length !== 1)
      {
        userData.pop();
      }
      
      //res.json({ ok: true });
      res.redirect("/");
    });
};