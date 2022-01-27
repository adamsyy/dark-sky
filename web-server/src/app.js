const express=require('express')
const app=express()

app.get('',(req,res)=>{
    res.send('eh working ahne')
})
app.get('/about',(req,res)=>{
    res.send('<h1>About</h1>')
})
app.get('/weather',(req,res)=>{
    res.send({
        'weather':'weather'
    })

})

app.listen(3000,()=>{
    console.log('server working')
})
