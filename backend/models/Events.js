const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Event = new Schema(
  {
    startingTime: {
        type:Number,
    required:true
},
 endingTime: {
     type:Number,
     required:true
 },
 photo: {
     type:String,
     required:true
 },
 description: {
    type:String,
    required:true
 },
 typeOfEvent:{
    type:String,
required:true
 },
 price:{
    type:Number,
required:true
 },
 public:{
    type:Boolean,
required:true
 }, 
 accepted:{
    type:Boolean,
required:true
 }},
 

  { timestamps: true }
);




const Events = mongoose.model("Event", Event);
module.exports = Events;
