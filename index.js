const express = require('express')
const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send('Hi, I am Yuvraj Singh Nain and I am currently learning Docker!')
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})