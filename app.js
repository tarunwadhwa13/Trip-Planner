var express = require('express');
var app = express();

var mongoose = require('mongoose');

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


const dbURI ="mongodb://tarun:tarun2656@cluster0-shard-00-00-637nq.mongodb.net:27017,cluster0-shard-00-01-637nq.mongodb.net:27017,cluster0-shard-00-02-637nq.mongodb.net:27017/Rome-2-Rio?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

const options = {
reconnectTries: Number.MAX_VALUE,
poolSize: 10
};

mongoose.connect(dbURI, options).then(
() => {
  console.log("Database connection established!");
},
err => {
  console.log("Error connecting Database instance due to: ", err);
}
);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var server = app.listen(process.env.PORT || 8081);
   