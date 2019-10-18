var appRouter = function (app) {

	app.get("/busylight/green", function(req, res) {
		var busylight = req.app.get('busylight');
		
		busylight.off();
		busylight.light('green');
		
		res.status(200).send("/busylight/green");
	});

	app.get("/busylight/error", function(req, res) {
		var busylight = req.app.get('busylight');
		
		busylight.ring('Funky', 7).blink('red');
		//busylight.ring('Funky', 1).blink('red');
		res.status(200).send("/busylight/error");
	});

	app.get("/busylight/off", function(req, res) {
		var busylight = req.app.get('busylight');
		
		busylight.off();
		
		res.status(200).send("/busylight/off");
	});

	app.get("/busylight/acknowledge", function(req, res) {
		var busylight = req.app.get('busylight');
		
		busylight.off();
		busylight.blink('yellow');
		
		res.status(200).send("/busylight/off");
	});

}

module.exports = appRouter;