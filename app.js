const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



geocode('Thiruvalla', (error, data) => {
    if (error) {
        console.log('some error')
    }
  
    forecast(data.latitude,data.longitude,(error,body)=>{
        console.log(body)
        })
})



     


