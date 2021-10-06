const ErrorHandler=require("../utils/errorHandler");

module.exports=(err,req,res,next)=>{
    //handling validation error
    if(err.name=='validationError'){
        const message=Object.values(err.errors).map(value =>value.message);
        error=new ErrorHandler(message,400);
    }

     // Handling Mongoose duplicate key errors
     if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`
        error = new ErrorHandler(message, 400)
    }
}