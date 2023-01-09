//HTTP Strict Transport Security
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocoding');

address = process.argv[2];

if (!address) {
    console.log('please provide an address!');
} else {
    geocode(address, (error , data) => {
        if ( error ){
            return console.log(error);
        }
        forecast(data.longitude,data.latitude, (error, dataForecast) => {
            if ( error ){
                return console.log('error ',error);
            }
            console.log(data.location);
            console.log('dataForecast ', dataForecast);
        })
    })
}