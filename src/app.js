const express = require('express')

const app = express()

const {auth} = require('./middleware/auth')
const {userAuth}=require('./middleware/userAuth')
app.use('/admin',auth)


app.get('/admin/getAllData',(req,res)=>{
 

    res.send("Data fetched successfully!!")
})

app.delete('/admin/delete',(req,res)=>{

   
    
    res.send("Data Deleted Successfully")
})

app.get("/user",userAuth,(req,res)=>{
    console.log("Response consoled !! ");
    res.send("user Response1 !!!")
   
}
)

app.post("/user",userAuth,(req,res)=>{
    console.log("Response consoled !! ");
    res.send("user Response2 data saved !!!")
   
})

app.post("/user/login",(req,res)=>{
    console.log("Response consoled !! ");
    res.send("user logined succesfully !!!")
})

app.listen(3000 ,()=>{
    console.log("Server running at port : 3000 ");
    
})