
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

