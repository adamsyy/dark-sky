const request=require('request')

const url='http://api.weatherstack.com/current?access_key=28aafc29d8dd91aeb4df864877a1021b&query=37.865,-122.865'
request({url:url,json:true}, (error, response,body)=>{

}); 
try{
    request({url:'https://api.mapbox.com/geocoding/v5/mapbox.places/smsmsmsmsm.json?access_token=pk.eyJ1IjoiYWRhbXJ1YmlrIiwiYSI6ImNreWc5eGl6eTBjNTkyb3FuODZoa3hndmIifQ.I2kv0aaBz4vhLeNuYG1OnA&limit=1',json:true},(request,response)=>{
const latitude=response.body.features[0].center[1] 
const longitude=response.body.features[0].center[0]  
console.log('latitude:'+latitude+'\nlongitude:'+longitude)
})
}catch(e){
    console.log(e)
}


