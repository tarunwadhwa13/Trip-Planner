var express = require('express');
var app = express();

var routes = require('./routes')


var cookieParser = require('cookie-parser')

app.use(cookieParser())

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}


app.use(cors(corsOptions));
app.use("/",express.static('public'));
app.use("/api",routes);




var server = app.listen(process.env.PORT || 8081);
   