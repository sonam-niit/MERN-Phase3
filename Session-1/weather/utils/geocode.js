const request=require('request');

const geocode=(address,callback)=>{
    const url1='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address
    +'.json?access_token=pk.eyJ1Ijoic2hhbGluaTk4IiwiYSI6ImNqejRsZDVlZDAybzEzZW56NXpxYTRwdG0ifQ.V_Oz9BJ972Q9Qvh9wMnpQQ&limit=1';

    request({ url: url1, json: true }, (error, response) => {

        if (error) {
            callback("unable to connect due to network issues",undefined)
        }
        else if(response.body.features.length===0){
            callback("unable to identify the location",undefined)
        }
        else {
            callback(undefined,{
             latitude : response.body.features[0].center[0],
             longitude : response.body.features[0].center[1],
             location:response.body.features[0].place_name
            })
            
        }
    
    })
}

module.exports = geocode