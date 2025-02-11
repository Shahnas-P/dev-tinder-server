const userAuth = (req,res,next)=>{
const token = 'adfadfadfad';
const authorization = token === 'asdfs'

if(!authorization){
    res.send("Unathorized !!!")
}
    next()

}
module.exports = {
    userAuth
}