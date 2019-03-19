const request = require('request')

const forecast = (lat, lon, callback) => {

    const url = `https://api.darksky.net/forecast/1fdf11b341f856160460f70630c62629/${lat},${lon}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degress out. This high today is ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow} There is a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
    
}


module.exports = forecast