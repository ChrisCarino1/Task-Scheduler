const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    task: { 
        type: String, 
        required: [true, "Task field is required"],
        minLength: [3, "Task field must be at least 3 characters long"]
    },
    date: { 
        type: Date, 
        required: [true, "Date is required"],
    },
    instructions: { 
        type: String, 
        required: [true, "Instructions is required"],
        minLength: [3, "Instructions must be at least 3 characters long"]
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }, 
    notes:[{
        type:String
    }]
}, { timestamps: true });
module.exports = mongoose.model('Task', TaskSchema);