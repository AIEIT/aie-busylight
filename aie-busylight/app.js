var express = require("express");
var routes = require("./routes/routes.js");
var app = express();

// BusyLight
var busylight = require('busylight').get()

// Initially set light Green
busylight.light('green');

app.set('busylight', busylight);

routes(app);

var server = app.listen(3000, function () {
	console.log("app running on port.", server.address().port);
});