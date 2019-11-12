var userData = require("../data/friends");


module.exports = function(app)
{
    app.get("/api/friends", function(req, res)
    {
        res.json(userData);
    });

    app.post("/api/friends", function(req, res)
    {
        for (let i = 0; i < userData.length; i++)
        {
            //console.log(userData);
            let scoreDiff = 0;

            for (let j = 0; j < userData[j].scores.length; j++)
            {

            }
        }

        userData.push(req.body);
        //res.json(true);

    });
};