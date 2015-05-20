// require express so that we can build an express app
var express = require('express');
// var cors = require('express-cors')
// require path so that we can use path stuff like path.join
var path = require('path');
// instantiate the app
var app = express();
var bodyParser = require("body-parser");
// app.use(cors({
//     allowedOrigins: ['http://api.eventful.com/rest/events/',
//     '*.eventful:*',
//         'github.com', 'google.com'
//     ]
// }))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
//
//
// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './clients')));
//require('./config/mongoose.js');
//require('./config/routes.js')(app);

app.listen(8002, function() {
  console.log('cool stuff on: 8002');
})