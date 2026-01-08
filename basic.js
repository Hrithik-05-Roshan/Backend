const http = require('http')  // auto installed with node modules

const server = http.createServer((req,res) =>{      // it will create and give the server


    if (req.url == "/about"){
        res.end("This is about page!")
    }
    
    else if (req.url == "/contact"){
        res.end("This is Contact page!")
    }
    else if (req.url == "/profile"){
        res.end("This is my profile")
    }
    else if (req.url == "/"){
        res.end("This is the Home Page!")
    }
})

server.listen(5000) // PORT is like a gate number, from where the data under server can pass!