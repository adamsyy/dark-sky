const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


var arguments = process.argv;
if (arguments[2]) {
    arguments[2]=arguments[2].toString()
    geocode(arguments[2], (error, data) => {
        if (error) {
            return console.log('some error')
        }

        forecast(data.latitude, data.longitude, (error, forecastdata) => {
            if(error){return console.log('some error')}
            console.log(forecastdata)
            console.log(data.location)
        })

    })
}