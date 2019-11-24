const express = require('express')
const router = express.Router()
const CoffeeShops = require("../models/CoffeeShops")


// create event 
router.post ('/create', (req,res)=>{
    CoffeeShops.findOne({coffeeName: req.body.coffeeShop} )
    .then(data => {
        let events = data.events

        events = events.push(req.body)
        console.log(req.body.evnts)
        CoffeeShops.findByIdAndUpdate(data._id,{ $push : {events: req.body.evnts}})
        .then(somethings=> res.json(somethings))
        .catch(err => res.send(err))
    })
    .catch(err=>res.send(err))
})

router.post('/coffeShop', (req, res)=>{
    let shop = {
        coffeeName: req.body.coffeeName,
        location:req.body.location,
        photo:req.body.photo,
        description:req.body.description,
        priceHour:req.body.priceHour,
        events:req.body.events
    }
    CoffeeShops.create(shop)
    .then(something => res.send(shop))
    .catch(err => res.send(err))
    


})
router.get('private/:id',(req, res)=>{
    
})



module.exports = router;
