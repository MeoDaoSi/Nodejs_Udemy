//http://api.weatherstack.com/current?access_key=091e258bee8df31346dc9a6531fcc684&query=10.029819,105.770738

//HTTP Strict Transport Security

const request = require('request');
const geocode = require('./utils/geocoding');

// const url = 'http://api.weatherstack.com/current?access_key=091e258bee8df31346dc9a6531fcc684&query=10.029819,105.770738'

// request({ url, json: true}, (error,response) => {
//     console.log(response.body.current);
// } )


geocode('Can Tho University', (error , data) => {
    console.log(error);
    console.log(data);
})
