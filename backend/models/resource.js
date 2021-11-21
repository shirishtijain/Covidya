const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter the title'],
        
    },
    location: {
        type: String,
        required: [true, 'Please enter the location of the resource']
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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

});

module.exports = mongoose.model('Resource', resourceSchema);
