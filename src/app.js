const express = require('express')

const app = express()

app.use("/user",(req,res,next)=>{
    console.log("Response consoled !! ");
    // res.send("Response !!!")
    next()

},[
(req,res,next)=>{
    console.log("Response 2 consoled !!");
    
    // res.send("Response 2 !!!")
    next()
},
(req,res,next)=>{
    console.log("Response 3 consoled !!!");
    // res.send("Response 3  !!!")
    next()
}],
(req,res,next)=>{
    console.log("Response 4 consoled !!!");
    res.send("Response 4")   

}
)

app.listen(3000 ,()=>{
    console.log("Server running at port : 3000 ");
    
})