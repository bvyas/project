// var mongoose = require('mongoose');
// var Event = mongoose.model('Event');

//  module.exports = {
//  	show_events: function(req, res){
//  		console.log('reached controller')
//  		Event.find({}, function(err, results){
//  			if(err){
//  				console.log(err);
//  			}
//  			console.log(results);
//  			res.json(results);
//  		})
//  	},
//  	add_events: function(req, res){
//  		console.log('in controller', req.body);
//  		var new_event = new Event({name: req.body.name, date: req.body.date});
 	
//  		new_event.save(function(err, result){
//  			if(err){
// 				console.log('something wrong');
// 			}
// 			else{
// 				console.log('inserted in db')
// 				res.json(result);
// 			}
//  		})
// 	 },
//  }