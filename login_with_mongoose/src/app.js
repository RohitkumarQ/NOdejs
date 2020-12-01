const express = require('express');
const path =require("path");
const dbConnection = require("./db/con");
const cookieSession = require('cookie-session');
const register= require("./models/register")

const { body, validationResult } = require('express-validator');
const Register = require('./models/register');
const app =express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port =process.env.Port || 3000;

const static_path= path.join(__dirname,"../public/");
const template_path= path.join(__dirname,"../templates/views");

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);

app.get("/",(req,res)=>{
    res.render("login-register");
})

app.get("/register",(req,res)=>{
    res.render("login-register");
})
app.get("/",(req,res)=>{
    res.render("login-register");
})

// REGISTER PAGE
app.post('/register',(req,res)=>{
    try{
    
                    // INSERTING USER INTO DATABASE
                   const registeremplloyee= new Register({
                       name: req.body.user_name,
                       email: req.body.user_email,
                       password: req.body.user_pass

                   })
                   const registered =  registeremplloyee.save();
                   res.status(201).render("login-register");
                }catch(error){
                    res.send(400).send(error);
                } 
    });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         


app.post('/register',(req,res)=>{
        try{
        
                const email = req.body.user_email;
                const password=req.body.user_pass;

                const useremail =Register.findOne({email:email});
                if(useremail.password===password){
                    res.status(201).render("./templates/views/index"); 
                }else{
                    res.send("password is not match");
                }
                    }catch(error){
                        res.send(400).send(error);
                    } 
        });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    

app.listen(port, ()=>{
console.log(`server is running at port no ${port}`);
})