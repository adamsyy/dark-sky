const path = require('path')
const hbs = require('hbs')
const express = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const app = express()


//define paths for express and views
const viwespath = path.join(__dirname, '../templates/views')
const pubdirpath = path.join(__dirname, '../public');
const partialspath = path.join(__dirname, '../templates/partials')

//setup hbs
app.set('view engine', 'hbs')
app.set('views', viwespath)
hbs.registerPartials(partialspath)

//setup static directory
app.use(express.static(pubdirpath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'weather app',
        name: 'adamsy'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about me',
        name: 'Adamsy'
    })
})
app.get('/help', (req, res) => {

    res.render('help', {
        title: 'Help',
        name: 'Adamsy    '
    })
})


app.get('/weather', (req, res) => {
 if(!req.query.address){
     return res.send('no address provided')
 }
 geocode(req.query.address,(error,{latitude,longitude,location})=>{
     if(error){
         res.send('location not avaialable');
     }
console.log(latitude)
forecast(latitude,longitude,(error2,body)=>{
    if(error2){
        res.send('not able to fetch the weather ');
    }
   
    res.send({
   forecast:"It is currently "+body.current.weather_descriptions[0]+" with "+body.current.temperature+" degree temperature",
   location,
   address:req.query.address
    })
})
 })
 

})


app.listen(3000, () => {
    console.log('server working')
})