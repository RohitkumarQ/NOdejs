const mongoose= require("mongoose");
const jwt= require("jsonwebtoken")

const employeeSchema= new mongoose.Schema({
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

employeeSchema.methods.generateAuthToken =async function(){
    try{
        const token= await jwt.sign({_id:this._id}, "mynameisrohitkumarfromhimachalkangrajwalajilagru");
       this.token =token;
     
        const user=await this.save();
        //console.log(user.token);

    } catch(error){
       
        let msg=console.log("the error part" + error);
        return msg;

    }

}

const Register= new mongoose.model("register",employeeSchema);

module.exports = Register