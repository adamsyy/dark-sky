const request = require('request')

const geocode = (address, callback) => {
    request({
        url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWRhbXJ1YmlrIiwiYSI6ImNreWc5eGl6eTBjNTkyb3FuODZoa3hndmIifQ.I2kv0aaBz4vhLeNuYG1OnA&limit=1',
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('unable to connect internet')

        } else if (body.features.length == 0) {
            callback('unable to locate the area')
        } else {
            const latitude = body.features[0].center[1]
            const longitude = body.features[0].center[0]
            const location =body.features[0].place_name
            data = {
                latitude: latitude,
                longitude: longitude,
                location: location
            }
            callback(undefined, data);
        }

    })
}
module.exports=geocode