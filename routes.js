var express = require('express');
var router = express.Router();

var request = require('request');
var IATA = require('./models/IATAModel');

var app_id = "c66591e4";
var api_key = "89d9830bfee0cb120f65ef19e5ed1fce"
var base_url = "https://developer.goibibo.com"

var api_search = base_url + '/api/search/?app_id=' + app_id  + '&app_key=' + api_key ;


// Home page route.
router.get('/flights', function (req, res) {
    source = req.query.source
    destination = req.query.dest
    dateofdeparture = req.query.from


    IATA.findOne({city:source},{code:1,_id:0},function(err,srccode){
        if(err) throw err;

        if(srccode != undefined){
            srciata =  srccode['code'];
            IATA.findOne({city:destination},{code:1,_id:0},function(err,dstcode){
                if(err) throw err;
        
                if(dstcode != undefined){
                    dstiata = dstcode['code'];
                    url = api_search + '&source='+srciata + '&destination='+dstiata + '&dateofdeparture='+ dateofdeparture + '&seatingclass=E&adults=1&children=0&infants=0&counter=100'
                    request.get({ url },      function(error, response, body) { 
                        if (!error && response.statusCode == 200) { 
                            res.send(body); 
                           } 
                       });
                }
                else{
                    res.send("Empty Destination Input");
                }
            });
        }
        else{
            res.send("Empty Source Input");
        }
    });
   


    

    // res.send({
    //     flight: [{ source: 'Hawaii' ,  destination: 'Alabama',arrival_time:"22:50",departure_time: "00:15", cities:"New Delhi, Dubai", total_time_taken:"01:45" },
    //     { source: 'Hawaii2' ,  destination: 'Alabama',arrival_time:"22:50",departure_time: "00:15", cities:"New Delhi, Dubai", total_time_taken:"01:45" }]
    //   });
})


module.exports = router;

/*
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});
*/