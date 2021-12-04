const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
        
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    verificationData: {
        type: Date,
        default: Date.now
    },
    contact: {
        type: Number,     
    },
    likes: {
        type: Number,
        default: 0,
        
    },
    resType: {
        type:String,
       enum:["Oxygen", "Plasma", "Medicine", "Beds"],
       required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'User'
    }

});

module.exports = mongoose.model('Resource', resourceSchema);
