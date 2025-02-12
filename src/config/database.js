const mongoose = require('mongoose')

const connectDB = async()=>{
 await  mongoose.connect('mongodb+srv://shahnasp117:nodejs@namastenodejs.dar2p.mongodb.net/devTinder')

}



module.exports = {
    connectDB
}
