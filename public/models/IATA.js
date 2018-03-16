var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var airportSchema = new Schema({
    city:String,
    code:String,
    worldareacode:String,
    country:String,
    longitude,
    latitude,
    airportname,
    gmt
})

// {'city': 'Arrabury', 'code': 'AAB', 'worldareacode': '802', 'country': 'Australia', 'longitude': '141.0', 'latitude': '-26.75', 'airportname': 'Arrabury', 'gmt': '+10.0'
// }

var IATAModel = mongoose.model('airportDetails', airportSchema );

/*
GET = IATAModel.findOne('city':source,'_id':0)
*/

module.exports = IATAModel;