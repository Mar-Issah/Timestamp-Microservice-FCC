// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



//===========================================================================================================================================

//route number 1 no parameter. if you dont enter any parameter the current date is used

app.get("/api/timestamp/", function (req, res) {
  const date = new Date();
  
  res.json({unix: date.getTime(),
           utc: date.toUTCString()});
});


//route number 2, parameter. 
//when you enter a date, a new date string is created, the time is converted into milliseconds
app.get("/api/timestamp/:dateString", function (req, res) {
  const {dateString} = req.params;
  
  let date = new Date(dateString);

  if(date.toString() === "Invalid Date"){
    date = new Date(parseInt(dateString))
  }
  

  if (date.toString() === "Invalid Date"){
     return  res.json({
        "error" : "Invalid Date"
            });
      } else {
     return  res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
            });
  }
  
});


//===========================================================================================================================================
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
