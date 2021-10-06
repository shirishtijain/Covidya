const mongoose=require("mongoose");


const connectDatabase=()=>{
    mongoose.connect("mongodb://localhost:27017/covidya").then(con=>{
        console.log("DB connected!");
       
    
    })
    }
module.exports=connectDatabase;