const mongoose = require("mongoose");

const trajetSchema = mongoose.Schema({
    trajet: {type: mongoose.Schema.Types.ObjectId, ref : 'trajets'}
});

const Trajet = mongoose.model("trajets", trajetSchema);

module.exports = Trajet;