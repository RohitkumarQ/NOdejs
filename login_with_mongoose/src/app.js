const express = require('express');
const path =require("path");
const dbConnection = require("./db/con");
const register= require("./models/register")
const cookie= require("cookie-session");

const Register = require('./models/register');
const { PassThrough } = require('stream');
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
    res.render("login");
})

app.get("/register",(req,res)=>{
    res.render("register");
})
app.get("/login",(req,res)=>{
    res.render("login");
})
app.get("/index",(req,res)=>{
    res.render("index");
})


app.post('/register',(req,res)=>{
    try{
                   
                   const registeremplloyee= new Register({
                       name: req.body.user_name,
                       email: req.body.user_email,
                       password: req.body.user_pass

                   })

                   const token = registeremplloyee.generateAuthToken();

                //    const registered =  registeremplloyee.save();
                const coookie=res.cookie("jwt",token);
                console.log(cookie);
                  
                   res.redirect("/");
                   console.log("successfully registered");
                }catch(error){
                    res.send(400).send(error);
                } 
            });

app.post('/',(req,res)=>{
        try{
            
            
                const email = req.body.user_email;
                const password=req.body.user_pass;
            
                const useremail =Register.findOne({email:email}, function (err, docs) {
                    let pass = docs.password;

                    const token = docs.generateAuthToken();
                    console.log(token);

                    if(pass==password){
                            res.redirect("index"); 
                        
                        }else{
                            res.send("password is not match");
                        }
            
                })

                 }catch(error){
                        res.send(error);
                    } 
        });   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        


app.listen(port, ()=>{
console.log(`server is running at port no ${port}`);
})