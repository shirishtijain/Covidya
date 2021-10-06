require('dotenv').config()
const app=require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./config/database");

//connecting to database
connectDatabase();

const server=app.listen(3000,()=>{
    console.log(`server started on port :3000`);

})