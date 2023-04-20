// index.js
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


// your first API endpoint... 
app.get("/api", (req, res)=>{
  let date = new Date();
  let UTC = date.getTime()+20000;
  UTC = new Date(UTC);
  UTS = UTC.toUTCString();
  let UNIX = date.getTime()+20000;
  res.json({ unix: UNIX, utc: UTS });
})
app.get("/api/:date?", (req, res) => {
  let date
  if (/^\d+$/.test(req.params.date)) {
    date = new Date(parseInt(req.params.date))
  } else {
    date = new Date(req.params.date)
  }
  if (isNaN(date)) {
    return res.json({ error: 'Invalid Date' })
  }
  let jason = {
    unix: new Date(date).getTime(),
    utc: new Date(date).toUTCString()
  }
  console.log(jason)
  res.json(jason)
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
