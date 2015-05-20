var event = require('../server/controllers/events.js');
//var order = require('../server/controllers/orders.js');
//var product = require('../server/controllers/products.js');
var bodyParser = require("body-parser");
module.exports = function(app){
	app.all('/', function(req, res, next) {
	    res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	    next()
	  });
	app.get('/events', function(req, res){
		event.show(req, res);
	})
	app.post('/events', function(req, res){
		event.add(req, res);
	})
	 
	
}
