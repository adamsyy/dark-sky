const path = require('path')
const hbs = require('hbs')
const express = require('express')
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

app.get('*',(req,res)=>{
res.render('404')
})

app.listen(3000, () => {
    console.log('server working')
})