const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/LoginSignUpDetails")

.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed tp login");
})

const LogInSchema = new mongoose.Schema({
    First_name:{
        type:String,
        required:true
    },
     Last_name:{
        type:String,
        required:true
    },
      Email:{
        type:String,
        required:true
    },
})

const collection = new mongoose.model("Collection",LogInSchema)

module.exports=collection