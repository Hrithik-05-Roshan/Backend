const express = require('express');
const app = express();
const morgan = require('morgan')
const connection = require('./config/db')
const userModel = require('./models/user')

app.use(morgan('dev'))

app.use(express.json())                         // built-in middleware
app.use(express.urlencoded({extended: true}))   // built-in middleware
app.use(express.static(("public")))

app.set("view engine", 'ejs')


app.use((req, res, next) => {
    console.log("This is middleWare!");
    return next()
})


app.get('/', (req,res)=>{
    res.render('index')
})



app.get('/about', (req,res)=>{
    res.send('About Page!')
})



app.get('/profile', (req,res)=>{
    res.send('Profile Page!')
})


// app.get('/get-form-data', (req,res)=>{    // in get method, data will show in the frontend in url
//     console.log(req.query)
//     res.send('data received!')
// })

app.post('/get-form-data', (req,res)=>{     // but if we use post it will not show the data!
    console.log(req.body)
    res.send('data received!')
})

app.listen(5000)