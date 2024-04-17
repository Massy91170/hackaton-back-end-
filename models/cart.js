const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    trajet: {type: mongoose.Schema.Types.ObjectId, ref : 'trajets'}
});

const Cart = mongoose.model("carts", cartSchema);

module.exports = Cart;