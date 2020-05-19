// const express = require('express')
const http = require('http');
const path = require('path')
const PORT = process.env.PORT || 80

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))


http.createServer((req, res) => {
    if (req.url == "/") {
        res.end(`<html><body><a href="/test">TEST LINK</a></body></html>`)
    } else {
        res.end(`
        {
            "applinks": {
                "apps": [],
                "details": [
                    {
                        "appID": "NRLYRM2NLJ.com.kliuchev.UniversalLinks",
                        "paths": ["*"]
                    }
                ]
            }
        } 
        `)
    }
}).listen(80);