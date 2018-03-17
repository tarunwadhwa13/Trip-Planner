var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var airportSchema = new Schema({
    city:String,
    code:String,
    worldareacode:String,
    country:String,
    longitude:String,
    latitude:String,
    airportname:String,
    gmt:String
})

// {'city': 'Arrabury', 'code': 'AAB', 'worldareacode': '802', 'country': 'Australia', 'longitude': '141.0', 'latitude': '-26.75', 'airportname': 'Arrabury', 'gmt': '+10.0'
// }

var IATA = mongoose.model('IATAModel', airportSchema,'IATA');

/*
GET = IATAModel.findOne('city':source,'_id':0)
*/

module.exports = IATA;