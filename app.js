var express = require('express');
var app = express();

var cookieParser = require('cookie-parser')

app.use(cookieParser())

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors')

var corsOptions = {
  origin: 'https://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}


app.use(cors(corsOptions));
app.use("/",express.static('public'));

app.route('/api/flights/').get((req, res) => {
  res.send({
    flight: [{ source: 'Hawaii' ,  destination: 'Alabama',arrival_time:"22:50",departure_time: "00:15", cities:"New Delhi, Dubai", total_time_taken:"01:45" }]
  });
});



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})