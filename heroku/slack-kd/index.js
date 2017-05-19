var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.status(200).send('Hello World!'); 
});

app.listen(port, function() {
  console.log('Node app is running on port' + port);
});

app.post('/kitchenduty', function(req, res, next){
	var username = req.body.user_name;
	var botPayload = {
		text: "Kitchen Duty Assignment: \nMonday AM - " + username + "\nMonday PM - " + username + "\nTuesday AM - " + username + "\nTuesday PM - " + username + "\nWednesday AM - " + username + "\nWednesday PM - " + username + "\nThursday AM - " + username + "\nThursday PM - " + username + "\nFriday AM - " + username + "\nFriday PM - " + username
	};


	if(username !== 'slackbot'){
		return res.status(200).json(botPayload);
	} else {
		return res.status(200).end();
	}
});"