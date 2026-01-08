const express = require('express');  //import express
const app = express();  //assign the express in terms of app, so later we use app.this, app.that !
const morgan = require('morgan') // third-party middleware


app.use(morgan('dev'))  // this will log the details of each request


app.set("view engine", 'ejs')  //server-side rendering with EJS. - this enables rendering


app.use((req, res, next) => {   // in middle we provide 3 things - req, res, next
    console.log("This is middleWare!");  //this will print in console
    return next()    // this will pass the ball to next routes! without this server cant load next routes.
})


app.get('/', (req, res, next) => {  // here we define a middleware only for '/',  
    const a = 5
    const b = 20
    console.log(a+b); // so this will log only when we go through '/'

    next()

},  (req,res)=>{
    res.render('index2')     // rendering the ejs fie
})



app.get('/about', (req,res)=>{
    res.send('About Page!')   // this will show the text
})



app.get('/profile', (req,res)=>{
    res.send('Profile Page!')
})



app.listen(3000)  // the gate number through which it will host