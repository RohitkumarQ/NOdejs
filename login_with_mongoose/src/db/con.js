const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/adminpannel",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`connection succsessful`);
}).catch((e)=>{
    console.log(`no connection`);
})