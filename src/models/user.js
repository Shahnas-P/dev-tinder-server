const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName :{
        type:String,
        required:true ,
        minLength:3,
        trim:true,
        maxLength:10
    },
    lastName:{
        type:String,
        minLength:3,
        trime:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    password:{
        type: String,
        required:true,
        trim:true,
        minLength:8
    },
    age:{
        type:Number ,
        min:18 
    },
    gender:{
        type:String , 
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error(`${value} is not a Valid Gender`)
            }
        }
    },
    description:{
        type:String,
        default:"This is default Description"
    },
    skills:[
        String
    ],
    photo:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
    }
} ,{timestamps:true})


module.exports = mongoose.model("User",userSchema.index({ email: 1 }, { unique: true }))