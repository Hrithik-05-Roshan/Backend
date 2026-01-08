const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://0.0.0.0/Backend').then(()=>{
    console.log('Mongodb Connected');  
})

module.exports = connection