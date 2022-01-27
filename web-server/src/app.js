const express=require('express')
const app=express()

app.get('',(req,res)=>{
    res.send('eh working ahne')
})

app.listen(3000)