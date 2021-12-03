const Resource = require('../models/resource');
const ErrorHandler = require('../utils/errorHandler');


// Create new resource   =>   /api/v1/resource/new

exports.newResource = async (req, res, next) => {
    req.body.user = req.user.id;

    const resource = await Resource.create(req.body);
    res.status(200).json({
        success: true,
        resource
    })
}

// Get all resources   =>   /api/v1/resources
exports.getResources = async (req, res, next) => {

    const {type}= req.params;
   const resources=[];
    await Resource.find({resType:type}).then(
        res=>{
            resources.push(res)
        }
    ).catch(err=>console.log(err)); 
    ;  

    res.status(200).json({
        resources
    })

}