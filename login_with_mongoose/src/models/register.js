const mongoose= require("mongoose");
const jwt= require("jsonwebtoken");

const adminpannel= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
            type:String,
            required:true
        }
    
})

adminpannel.methods.generateAuthToken =async function(res){
    try{
            const token= await jwt.sign({_id:this._id}, "mynameisrohitkumarfromhimachalkangrajwalajilagru");
            this.token =token;
            const user=await this.save();
        } catch(error){
                        console.log("the error part" + error);
                      }

}

const Register= new mongoose.model("register",adminpannel);

module.exports = Register