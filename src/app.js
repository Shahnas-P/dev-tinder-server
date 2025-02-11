const express = require('express')

const app = express()


app.use('/user',(req,res)=>{
   
        throw new Error()
        res.send(
            "Data fetched successfully!!"
        )
  
   

})

app.use('/',(err,req,res,next)=>{
    if(err){
        res.status(500).send("Some Error : Contact Support team")
    }
})



app.listen(3000 ,()=>{
    console.log("Server running at port : 3000 ");
    
})