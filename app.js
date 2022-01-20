const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


var arguments = process.argv;
if (arguments[2]) {
    arguments[2]=arguments[2].toString()
    geocode(arguments[2], (error, data) => {
        if (error) {
            console.log('some error')
        }

        forecast(data.latitude, data.longitude, (error, forecastdata) => {
            console.log(forecastdata)
            console.log(data.location)
        })

    })
}