const axios = require('axios')
let data1 = 
 [
     {
         "coffeeName":'brew92',
         "startingTime": "3:30 pm",
         "endingTime": "6:30 pm",
         "date": "octobar 3rd",
         "typeOfEvent": "Music",
         "price": 300,
         "accepted": true,
         "public": true,
         "photo": "https://i.ibb.co/dDp1WV3/jeshoots-com-e-Cktz-Gj-C-i-U-unsplash.jpg"   
     },
     {
        "coffeeName":'Medd cafee',
         "startingTime": "3:00 pm",
         "endingTime": "6:30 pm",
         "date": "octobar 3rd",
         "typeOfEvent": "Music",
         "price": 250,
         "accepted": true,
         "public": true,
         "photo": "https://i.ibb.co/SBDxTG8/bruno-cervera-Gi6-m-t-W-E-unsplash.jpg"   
     },  {
         "coffeeName":'medd Cafe',
         "startingTime": "3:30 pm",
         "endingTime": "6:30 pm",
         "date": "octobar 3rd",
         "typeOfEvent": "Music",
         "price": 250,
         "accepted": true,
         "public": true,
         "photo": "https://i.ibb.co/Bn3hXqd/Screen-Shot-2019-11-19-at-3-10-35-PM.png"

     }, {
        "coffeeName":'medd Cafe',
        "startingTime": "3:30 pm",
        "endingTime": "6:30 pm",
        "date": "octobar 3rd",
        "typeOfEvent": "Painting",
        "price": 300,
        "accepted": true,
        "public": true,
        "photo": "https://i.ibb.co/dDp1WV3/jeshoots-com-e-Cktz-Gj-C-i-U-unsplash.jpg"   
    },{
        "coffeeName":'noob Cafe',
        "startingTime": "3:30 pm",
        "endingTime": "6:30 pm",
        "date": "octobar 3rd",
        "typeOfEvent": "Music",
        "price": 350,
        "accepted": true,
        "public": true,
        "photo": "https://i.ibb.co/98sS7yP/bundo-kim-ckyc-Y6zkqy-M-unsplash.jpg"     
    },{
        "coffeeName":'medd Cafe',
        "startingTime": "3:30 pm",
        "endingTime": "6:30 pm",
        "date": "octobar 3rd",
        "typeOfEvent": "Music",
        "price": 500,
        "accepted": true,
        "public": true,
        "photo": "https://i.ibb.co/Bn3hXqd/Screen-Shot-2019-11-19-at-3-10-35-PM.png"    
    },{
        "coffeeName":'star Cafe',
        "startingTime": "3:30 pm",
        "endingTime": "6:30 pm",
        "date": "octobar 3rd",
        "typeOfEvent": "Music",
        "price": 300,
        "accepted": true,
        "public": true,
        "photo": "https://i.ibb.co/98sS7yP/bundo-kim-ckyc-Y6zkqy-M-unsplash.jpg"     
    },{
        "coffeeName":'barn Cafe',
        "startingTime": "3:30 pm",
        "endingTime": "6:30 pm",
        "date": "octobar 3rd",
        "typeOfEvent": "Games",
        "price": 300,
        "accepted": true,
        "public": true,
        "photo": "https://i.ibb.co/SBDxTG8/bruno-cervera-Gi6-m-t-W-E-unsplash.jpg",
           
    }
 
  ]

// const result = data1.filter(word => {

// return word['coffeeName'] == 'brew92'
// // })
// console.log(result);


// *******************************************

// axios.get('localhost:5100/events/').then(
//     data => data1 = data 
// )
// .catch(err=> console.log(err))

// *******************************************


module.exports=data1


// "coffeeName": "medd Cafe",
//     "location": "https://goo.gl/maps/LSNKddJSp8hmKEsq5",
//     "photo": "https://www.liquidesign.co.uk/wp-content/uploads/2018/06/850_6957-HDR.jpg",
//     "description":"a place with a lot of things that blah here is somethin and an thing whatever idk",
//     "priceHour": 150,
//     "events":[
//         {
//             "startingTime": "3:30 pm",
//             "endingTime": "6:30 pm",
//             "date": "octobar 3rd",
//             "typeOfEvent": "Music",
//             "price": 250,
//             "accepted": true,
//             "public": true     
//         },
//         {
//             "startingTime": "3:30 pm",
//             "endingTime": "6:30 pm",
//             "date": "octobar 3rd",
//             "typeOfEvent": "Music",
//             "price": 250,
//             "accepted": true,
//             "public": true     
//         }, {
//             "startingTime": "3:30 pm",
//             "endingTime": "6:30 pm",
//             "date": "octobar 3rd",
//             "typeOfEvent": "Music",
//             "price": 250,
//             "accepted": true,
//             "public": true     
//         }, {
//             "startingTime": "3:30 pm",
//             "endingTime": "6:30 pm",
//             "date": "octobar 3rd",
//             "typeOfEvent": "Music",
//             "price": 250,
//             "accepted": true,
//             "public": true     
//         }, {
//             "startingTime": "3:30 pm",
//             "endingTime": "6:30 pm",
//             "date": "octobar 3rd",
//             "typeOfEvent": "Music",
//             "price": 250,
//             "accepted": true,
//             "public": true     
//         }