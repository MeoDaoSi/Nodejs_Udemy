//http://api.weatherstack.com/current?access_key=091e258bee8df31346dc9a6531fcc684&query=10.029819,105.770738

const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=091e258bee8df31346dc9a6531fcc684&query=10.029819,105.770738'

// request({ url, json: true}, (error,response) => {
//     console.log(response.body.current);
// } )

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGV2YW50aW5oMTIzMCIsImEiOiJjbGNqMmFuamwwYnk3M29wODZ4ODZ1NHVlIn0.dDuFP5ivp6zVguUj1q5asA'

request({url, json: true}, (error, response) => {
    console.log('latitude ' + response.body.features[0].center[1] + ' longitude ' + response.body.features[0].center[0] );
})
