const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    trajet: {type: mongoose.Schema.Types.ObjectId, ref : 'trajets'}
});

const Booking = mongoose.model("bookings", bookingSchema);

module.exports = Booking;