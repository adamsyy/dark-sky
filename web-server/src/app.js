const path = require('path')
const hbs=require('hbs')
const express = require('express')
const app = express()
app.set('view engine','hbs')
const pubdirpath = path.join(__dirname, '../public');
app.use(express.static(pubdirpath))
 
app.get('',(req,res)=>{
    res.render('index')
})

app.get('/about', (req, res) => {

})
app.get('/weather', (req, res) => {
    res.send({
        'weather': 'weather'
    })

})

app.listen(3000, () => {
    console.log('server working')
})