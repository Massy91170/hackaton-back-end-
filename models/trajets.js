const mongoose = require("mongoose");

const trajetSchema = mongoose.Schema({
    departure: String, 
    arrival: String, 
    date: String, 
    price: Number, 
});

const Trajet = mongoose.model("trajets", trajetSchema);

module.exports = Trajet;