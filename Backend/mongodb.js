const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://aksharansh123:akshar2003@cluster0.ny7z8bo.mongodb.net/test")

.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed tp login");
})

const collections = new mongoose.Schema({
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

const collection = new mongoose.model("Collection",collections)

module.exports=collection
