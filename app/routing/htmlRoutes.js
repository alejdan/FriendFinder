var path = require("path");


module.exports = function(app) {

    //GET for the home page

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //GET for the survey page

    app.get("/survey", function (req, res) {
        return res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //GET for all unknown routes

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}

