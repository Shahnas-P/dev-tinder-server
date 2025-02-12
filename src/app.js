const express = require('express')
const {connectDB}=require('./config/database')
const app = express()







connectDB().then(()=>{
    console.log("Database Connected Successfully !!!");
    app.listen(3000 ,()=>{
        console.log("Server running at port : 3000 ");
        
    })
    
}).catch((error)=>{
    console.log("Error:Something went wrong!!");
    
})



