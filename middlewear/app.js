const express = require('express');
const app = express()

function middleware(req, res, next) {
    console.log('i am a middleware');
    next();
}

function standerdmiddleware(req, res, next) {
    console.log('i am a standerdmiddleware');
    res.send(`<h1>Hello world!<h1>`);
    next();
}

function topmiddleware(req, res, next) {
    console.log('i am a topmiddleware');

}
app.get('/', middleware, standerdmiddleware, topmiddleware),

    app.listen(3000);