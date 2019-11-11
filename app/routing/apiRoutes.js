var userData = require("../data/friends");


module.exports = function(app)
{
    app.get("/api/survey", function(req, res)
    {
        res.json(userData);
    });

    app.post("/api/survey", function(req, res)
    {
        userData.push(req.body);
    });
};