const express = require('express')

const app = express()

app.use("/hello",(req,res)=>{
res.send("How are you Shanas Afsin")
})

app.use("/test",(req,res)=>{
res.send("Helo from Server")
})

app.listen(3000 ,()=>{
    console.log("Server running at port : 3000 ");
    
})