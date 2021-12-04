require('dotenv').config()
const app=require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./config/database");

//connecting to database
connectDatabase();

