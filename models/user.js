const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    userName : String,
    email : String,
    password : String,
    // age : Number,
    // gender : {
    //     type: String,
    //     enum : ['male', 'female', 'trans']
    // }
})

const userModel = mongoose.model('user', userSchema)


module.exports = userModel