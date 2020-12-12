const express = require('express');
const path = require("path");
const dbConnection = require("./db/con");
const register = require("./models/register")
var cookie = require("cookie-parser");
const Register = require('./models/register');
const employee = require('./models/employee');
const { PassThrough } = require('stream');
const JSAlert = require("js-alert");
const hbs = require("hbs");
const fs = require("fs");
const bodyParser = require("body-parser");
const handlebars = require('express-handlebars');
const { namespace } = require('store');
const { exec } = require('child_process');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(cookie());

const port = process.env.Port || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials = path.join(__dirname, '/templates/partials/header-sidebar.hbs');
hbs.registerPartial('partials', partials);


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);


app.get("/", (req, res) => {
    res.render("login", { success: "" });
});

app.get("/register", (req, res) => {
    res.render("register", { success: "" });
});
app.get("/employee", (req, res) => {
    employee.find({}, function (err, docs) {
        console.log(docs);
        const data = docs;
        res.render('employee',{ "employee": docs });
       
    });
});
app.get("/index", (req, res) => {
    res.render("index");
});
app.get("/addemployees", (req, res) => {
    res.render("addemployees");
});
app.get("/header-sidebar", (req, res) => {
    res.render("header-sidebar");
});
app.post('/register', (req, res) => {
    try {
        const adminpannel = new Register({
            name: req.body.user_name,
            email: req.body.user_email,
            password: req.body.user_pass
        })
        const user = adminpannel.generateAuthToken();
        res.redirect("/");
    } catch (error) {
        res.send(error);
    }
});

app.post('/', (req, res) => {
    try {
        const email = req.body.user_email;
        const password = req.body.user_pass;

        const useremail = Register.findOne({ email: email }, function (err, docs) {
            let pass = docs.password;
            if (pass == password) {
                res.cookie('users', docs,);

                res.redirect("index");
            } else {
                res.render("login", { success: "Incorrect email or password" });
            }
        })

    } catch (error) {
        res.send(error);
    }
});
app.post('/addemployees',(req, res, next) => {
    try {
        const adminpannel = new employee({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            father_name: req.body.fathername,
            home_contect: req.body.no,
            personal_contect: req.body.pno,
            address: req.body.address,
            team: req.body.team,
            designation: req.body.designation,
            bankaccuntno: req.body.bankacc
        })
        const registered = adminpannel.save();
        // employee.find({}, function (err, docs) {
        //     console.log(docs);
        //     const data = docs;
        //     res.render('employee',{ "employee": docs });
           
        // });

        res.redirect("/employee");

    } catch (error) {
        res.send(error);
    }
});

app.post("/employee", (req, res) => {
    employee.find({}, function (err, docs) {
        console.log(docs);
        const data = docs;
        res.render('employee',{ "employee": docs });
       
    });
});
app.get('/employee/:id', (req, res) =>{
    res.render("/employee/:id'");
})
app.post('/employee/:id', (req, res) => {
    employee.remove({_id: mongodb.ObjectID( req.params.id)}, (err, result) => {
      if (err) return console.log(err)
      console.log(req.body)
      res.redirect('employee')
    })
  })
  

// LOGOUT
app.get('/logout', (req, res, next) => {
    res.clearCookie('users');
    res.redirect("/");

});
app.use('*', (req, res) => {
    res.status(404).send('<h1>404 Page Not Found!</h1>');
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})