const mongoose = require('mongoose')

const borrowSchema = new mongoose.Schema({
    amount:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    upiId:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required: true
    }
});

module.exports = mongoose.model('borrowSchema',borrowSchema)