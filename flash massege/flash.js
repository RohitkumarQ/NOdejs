const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

const port = process.env.PORT || 4000;

app.use(session({
    secret: 'geeksforgeeks',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());

app.get('/', (req, res) => {
    req.flash('message', 'Success!!');
    res.redirect('/gfg');
});

app.get('/gfg', (req, res) => {
    res.send(req.flash('message'));
});

app.listen(port, (err) => {
    if (err) console.log(err);
    console.log('Server is up and listening on', port);
});