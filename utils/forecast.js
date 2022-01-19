const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=28aafc29d8dd91aeb4df864877a1021b&query='+latitude+','+longitude
request({url:url,json:true},(error,response,body)=>{
callback(undefined,body)
})
}


module.exports = forecast