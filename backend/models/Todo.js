const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
        
    },
    status: {
        type: String,
        required: true,
        enum: ["completed", "uncompleted"],
        default: "uncompleted"
    }
},
{
    timestamps: true, 
})


module.exports = mongoose.model("Todo", TodoSchema);
