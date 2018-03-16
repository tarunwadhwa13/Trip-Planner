var express = require('express');
var router = express.Router();

// Home page route.
router.get('/flights', function (req, res) {
    source = req.query.source
    destination = req.query.dest
    dateofdeparture = req.query.from


    res.send({
        flight: [{ source: 'Hawaii' ,  destination: 'Alabama',arrival_time:"22:50",departure_time: "00:15", cities:"New Delhi, Dubai", total_time_taken:"01:45" },
        { source: 'Hawaii2' ,  destination: 'Alabama',arrival_time:"22:50",departure_time: "00:15", cities:"New Delhi, Dubai", total_time_taken:"01:45" }]
      });
})


module.exports = router;