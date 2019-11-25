const express = require('express')
const router = express.Router()
const CoffeeShops = require("../models/CoffeeShops")
const Events = require('../models/Events')


// create event 
router.post ('/create', (req,res)=>{
    Events.create(req.body)
    .then(thing => res.send('created'))
    .catch(err=> res.send(err))
    // CoffeeShops.findOne({coffeeName: req.body.coffeeShop} )
    // .then(data => {
    //     let events = data.events

    //     events = events.push(req.body)
    //     console.log(req.body.evnts)
    //     CoffeeShops.findByIdAndUpdate(data._id,{ $push : {events: req.body.evnts}})
    //     .then(somethings=> res.json(somethings))
    //     .catch(err => res.send(err))
    // })
    // .catch(err=>res.send(err))
})



//create the coffee shop 
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



// find event by id
//it does not wrok for know 
router.get('private/:id',(req, res)=>{
    Events.find({_id:req.params.id})
    .then(data => res.send(data))
    .catch(err => res.send(err))
})


//gets all the data
router.get('/',(req, res)=>{
    Events.find()
    .then(data => res.send(data))
    .catch(err => res.send(err))
})

//delete event by id 
router.get('/delete/:id', (req, res)=>{
    Events.findByIdAndDelete(req.params.id)
    .then(data => res.send(data+'deleted'))
    .catch(err => res.send(err))
})


module.exports = router;
