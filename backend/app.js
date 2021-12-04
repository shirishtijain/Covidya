require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const bodyParser = require('body-parser')

const app=express();
const connectDatabase=require("./config/database");

//connecting to database
connectDatabase();

var cors = require('cors')

app.use(cors())

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const auth = require("./routes/auth");
const resource = require("./routes/resource");



app.use('/api/v1', auth);
app.use('/api/v2', resource);

const server=app.listen(4000,()=>{
    console.log(`server started on port :4000`);

})


module.exports = app