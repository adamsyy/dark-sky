const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


var arguments = process.argv;

if (arguments[2]) {
    arguments[2] = arguments[2].toString()
    geocode(arguments[2], (error, {latitude,longitude,location}={}) => {
        if (error) {
            return console.log('location not found')
        }

        forecast(latitude, longitude, (error, forecastdata) => {
            if (error) {
                return console.log('Error 404!')
            }
            console.log(forecastdata.current)
            console.log(location)
        })

    })
}
else{
    return console.log("give address please")
}