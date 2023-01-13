const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=6ee7bda24a85e67d194864fc1c5a65ef&query=${longitude},${latitude}`;
    request( { url, json: true }, (error, { body } = {} ) => {
        if ( error ){
            callback('Unable connect to weather service.',undefined);
        }else if( body.error ){
            callback('Unable to find location',undefined);
        }else{
            callback(undefined,body.current.temperature);
        }
    })
} 

module.exports = forecast;