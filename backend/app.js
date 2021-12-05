require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const bodyParser = require('body-parser')

const app=express();
const connectDatabase=require("./config/database");

//connecting to database
connectDatabase();

var cors = require('cors')

app.get('/', (req, res) => res.send('API Running'))

app.use(cors())

// Init Middleware
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, x-auth-token'
    );
    next();
  });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const auth = require("./routes/auth");
const resource = require("./routes/resource");



app.use('/api/v1', auth);
app.use('/api/v1', resource);




module.exports = app