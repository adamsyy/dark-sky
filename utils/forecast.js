const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=28aafc29d8dd91aeb4df864877a1021b&query='+latitude+','+longitude
request({url,json:true},(error,{body})=>{
callback(undefined,body)
})
}


module.exports = forecast
//random lines added