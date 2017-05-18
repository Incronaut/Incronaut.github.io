var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 1337));

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.status(200).send('Hello World!'); 
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.post('/hello', function(req, res,next){
	var username = req.body.user_name;
	var botPayload = {
		text: 'Hello ' + username + ', welcome to the Slack channel! Have fun:)'
	};

	if(username !== 'slackbot'){
		return res.status(200).json(botPayload);
	} else {
		return res.status(200).end();
	}
});