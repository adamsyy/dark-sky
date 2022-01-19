const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

forecast(10.02859,76.328716,(error,body)=>{
    console.log(body)
    })
     



// geocode('model engineering college', (error, data) => {
//     if (error) {
//         console.log('some error')
//     }
//     console.log(data.latitude)
//     console.log(data.longitude)
//     console.log(data.location)
// })