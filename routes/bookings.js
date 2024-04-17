var express = require('express');
var router = express.Router();
const Booking = require("../models/bookings")

/* GET home page. */
router.post('/', function(req, res) {
    
    // reçoit une string à mettre en json
    

    const newBooking = new Booking ({
        trajet: req.body.id,
    })
    newBooking.save()
    .then(data => res.json(data))
});

module.exports = router;