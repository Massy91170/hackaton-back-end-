var express = require('express');
var router = express.Router();
const Trajet = require("../models/trajets")
const moment = require('moment');


router.get('/:departure/:arrival/:date', function(req, res) {
    const selectedDate = moment.utc(req.params.date).format("YYYY-MM-DD"); 
    const startDate = `${selectedDate}T00:00:00.000+00:00`;
    const endDate = `${selectedDate}T23:59:59.999+00:00`; 

    Trajet.find({
        departure: req.params.departure,
        arrival: req.params.arrival,
        date: {
            $gte: startDate,
            $lte: endDate,
        }
    })
    .then(data => {
        res.json(data)
        // res.json({
        //     result: true,
        //     trajets: {
        //         departure: data.departure,
        //         arrival: data.departure,
        //         date: data.departure,
        //     }
        // })
    })
})

    // const searchedDate = req.body.date;
    // const formatedDate = searchedDate.slice(0, 10);
    // const pattern = /.+?(?=T)/;
    // const found = searchedDate.match(pattern);
    // console.log("found: ", found)

module.exports = router;