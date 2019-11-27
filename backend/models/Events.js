const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Event = new Schema(
  {
    startingTime: {
        type:String,
    required:true
},
 endingTime: {
     type:String,
     required:true
 },
 photo: {
     type:String,
     required:false
 },
 description: {
    type:String,
    required:false
 },
 typeOfEvent:{
    type:String,
required:true
 },
 price:{
    type:String,
required:false
 },
 public:{
    type:Boolean,
required:false
 }, 
 accepted:{
    type:Boolean,
required:false
 },

 name:{
    type:String,
required:true
 },
 coffeeShopName:{
    type:String,
required:false
 },
 capacity:{
     type:String,
     required:true
 },
 date:{
     type:Date,
     required:true
 },
 thingsEvent:{
     type:String,
     required:true
 },
 options:{
     type:String,
     required:true
 },
 priOrpub:{
     type:String,
     required:true
 }


},
 

  { timestamps: true }
);




const Events = mongoose.model("Event", Event);
module.exports = Events;
