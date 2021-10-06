const User=require("../models/user");
const ErrorHandler=require("../utils/errorHandler");
const sendToken = require('../utils/jwtToken');

exports.registerUser=async (req,res,next)=>{
    const {name,email,password}=req.body;

    const user = await User.create({
        name,
        email,
        password
       
    })

    sendToken(user, 200, res);

}

//Login user
exports.loginUser=async (req,res,next)=>{
    const {email,password}=req.body;
    console.log(req.body);

    //check if email and password is entered by the user
    if(!email || !password){
        return next(new ErrorHandler('Please enter email and password',400));  
    }
    //find user in db
    const user=await User.findOne({email}).select('+password');

    if(!user){
     return next(new ErrorHandler('Please enter valid email and password',401));

    }

    //check if password is correct or not
    const isPasswordMatched=await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler('Please enter valid email and password',401));
    }

    sendToken(user,200,res);
}

exports.logoutUser=async (req,res,next)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    });

    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
}