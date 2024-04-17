var express = require('express');
var router = express.Router();
const Cart = require('../models/cart');


router.post('/', function(req, res) {

    
  const newCart = new Cart({
    trajet: req.body.id,
})
newCart.save()
.then(data => res.json(data))
});

router.get('/', function (req,res){
    Cart.find().populate("trajet")
    .then(data => res.json(data))
});

router.delete('/', function (req,res){
  console.log(req.body)
  Cart.deleteOne({
    _id: req.body.id
  })
  .then(data => res.json(data) )
})

module.exports = router;