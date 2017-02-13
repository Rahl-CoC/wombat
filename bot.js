var HTTPS = require('https');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexc69 = /!wm c69/;  botRegexa69 = /!wm a69/;
      botRegex69a69 = /!wm 69a69/;
  
  if(request.text && botRegexa69.test(request.text)) {
    this.res.writeHead(200);
    postMessage("No you didn't.");
    this.res.end();
  }
  else if(request.text && botRegexc69.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Oi, stop fucking around and get out there and 3*.");
    this.res.end();
  }
  else if(request.text && botRegex69a69.test(request.text)) {
    this.res.writeHead(200);
    postMessage("69 on 69? Sixty-Ninception.");
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
