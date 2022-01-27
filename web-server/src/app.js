const path = require('path')
const express = require('express')
const app = express()
const pubdirpath = path.join(__dirname, '../public');


app.use(express.static(pubdirpath))
 
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