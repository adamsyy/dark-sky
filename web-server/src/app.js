const path = require('path')
const hbs = require('hbs')
const express = require('express')
const app = express()
const viwespath = path.join(__dirname, '../view')
const pubdirpath = path.join(__dirname, '../public');
app.set('view engine', 'hbs')
app.set('views', viwespath)

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

    res.render('help')
})

app.listen(3000, () => {
    console.log('server working')
})