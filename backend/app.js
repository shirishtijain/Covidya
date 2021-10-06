require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const bodyParser = require('body-parser')

const app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const auth=require("./routes/auth");

app.use('/api/v1',auth);

module.exports = app