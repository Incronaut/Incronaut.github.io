var express = require('express')
var request = require('request')
var bodyParser = require('body-parser')
var fs = require('fs')
var app = express()
app.set('port', (process.env.PORT || 1337))
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var globalFlag = [
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false
]


var globalName = [
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	''
]

/*function get_line(roster, line_no, callback) {
    fs.readFile(roster, function (err, data) {
      if (err) throw err;

      // Data is a buffer that we need to convert to a string
      // Improvement: loop over the buffer and stop when the line is reached
      var lines = data.toString('utf-8').split("\n");

      if(+line_no > lines.length){
        return callback('File end reached without finding line', null);
      }

      callback(null, lines[+line_no]);
    });
};
get_line('/roster.txt', 1, function(err, line){
        line;
    });
*/


var days = {
	"list": [
    	"Monday AM",
    	"Monday PM",
    	"Tuesday AM",
    	"Tuesday PM",
    	"Wednesday AM",
    	"Wednesday PM",
    	"Thursday AM",
    	"Thursday PM",
    	"Friday AM",
    	"Friday PM"
	]
};

app.get('/', function(req, res) {
    res.status(200).send('Hello World!'); 
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.post('/kitchenduty/main', urlencodedParser, (req, res) =>{
    res.status(200).end() // best practice to respond with empty 200 status code
    var reqBody = req.body
    var responseURL = reqBody.response_url
    if (reqBody.token != 'BQEb6aaG1KU9h0MGRqXAqHAw'){
        res.status(403).end("Access forbidden")
    }else{
    	for(var x = 0; x < 10; x++){
    		globalName[x] = '';
    	}
    	var username = reqBody.user_name;
		var done = false;
		
        var message = {
        	"text": "Kitchen Duty Assignment: ",
        	"response_type": "in_channel",        	
            "attachments": []
        }
        for(var x = 0; x < 10; x++){
        	message.attachments.push({
        		"title": days.list[x] +' - '+globalName[x],
                "fallback": "Button fallback error",
                "callback_id": "button_tutorial",
                "attachment_type": "default",
                "actions": [
                    {
                        "name": days.list[x],
                        "text": days.list[x],
                        "type": "button",
                        "value": days.list[x],
                        "style": (globalFlag[x] ? "danger" : 'primary')
                    }
                ]
        	})
        	
        }
    	sendMessageToSlackResponseURL(responseURL, message)
    }
})

app.post('/kitchenduty/actions', urlencodedParser, (req, res) =>{
    res.status(200).end() // best practice to respond with 200 status
    var actionJSONPayload = JSON.parse(req.body.payload) // parse URL-encoded payload JSON string
    //actionJSONPayload.actions[0].text = actionJSONPayload.actions[0].text + actionJSONPayload.user.name;
    for(var x = 0; x < 10; x++){
    	if(actionJSONPayload.actions[0].name === days.list[x]){
			globalName[x] = actionJSONPayload.user.name;
		}
	}
    var message = {
		"text": "Kitchen Duty Assignment: ",        	
        "attachments": [],
        "replace_original": true
    }
    for(var x = 0; x < 10; x++){
    	message.attachments.push({
    		"title": days.list[x] + ' - '+globalName[x],
            "fallback": "Button fallback error",
            "callback_id": "button_tutorial",
            "attachment_type": "default",
            "actions": [
                {
                    "name": days.list[x],
                    "text": days.list[x],
                    "type": "button",
                    "value": days.list[x],
                    "style": (globalName[x] !== '' ? "danger" : 'primary')
                }
            ]
    	})
    	
    }
    sendMessageToSlackResponseURL(actionJSONPayload.response_url, message)
})

function sendMessageToSlackResponseURL(responseURL, JSONmessage){
    var postOptions = {
        uri: responseURL,
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        json: JSONmessage
    }
    request(postOptions, (error, response, body) => {
        if (error){
            // handle errors as you see fit
        }
    })
}