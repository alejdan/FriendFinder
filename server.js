var express = require("express");

var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require("./app/routing/apiRoutes")(app);
var htmlRoutes = require("./app/routing/htmlRoutes")
htmlRoutes(app);
var apiRoutes = require("./app/routing/apiRoutes")
apiRoutes(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});