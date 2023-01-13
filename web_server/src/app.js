const path = require('path');
const express = require('express');
const hbs = require('hbs');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocoding');

const app = express();

//Define paths for express config
const publicPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Home'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help'
    })
})
app.get('/weather', (req, res) => {
    if ( !req.query.address ){
        return res.send({
            error: 'You must provide an address'
        })
    }
    geocode(req.query.address, (error, { longitude, latitude, location } = {} ) => {
        if (error) {
            return res.send({ error });
        }
        forecast(longitude, latitude, (error, dataForecast) => {
            if (error) {
                return res.send({ error });
            }
            res.send({
                forecast: dataForecast,
                location,
                address : req.query.address
            })
        });
    });
})
app.get('/products', (req, res) => {
    if ( !req.query.search ){
        return res.send('You must provide a search term')
    }
    res.send({
        product: []
    })
})

app.get('/*', (req, res) => {
    res.render('404page',{
        messageError: 'error'
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})