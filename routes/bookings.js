var express = require('express');
var router = express.Router();
const Booking = require("../models/bookings")


router.post('/', function(req, res) {
    

    const newBooking = new Booking ({
        trajet: req.body.id,
    })
    newBooking.save()
    .then(data => res.json(data))
});


router.get('/', function(req, res){
    Booking.find()
    .populate("trajet")
    .then((data) =>{
        console.log(data) 
        res.json(data)
    })
})

module.exports = router;