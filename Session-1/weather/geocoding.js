//request Module added
const request = require('request')
//sample API Call URL
const url = 'https://api.darksky.net/forecast/0f117a9db5a9407fd73d76e7555804b1/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {

    //error handling
    if (error) {
        console.log('No network available')
    }
    else {
        console.log(response.body.daily.data[0].summary +
            ' It is currently ' + response.body.currently.temperature +
            ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
    }

})
//Geo Code URL from MapBox
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bengaluru.json?access_token=pk.eyJ1Ijoic2hhbGluaTk4IiwiYSI6ImNqejRsZDVlZDAybzEzZW56NXpxYTRwdG0ifQ.V_Oz9BJ972Q9Qvh9wMnpQQ&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {

    if (error) {
        console.log("No network available")
    }
    else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }

})

