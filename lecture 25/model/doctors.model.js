const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true    
    },
    experience: {
        type: Number,
        required: true
    },
    fees: {
        type: Number,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model('doctors', doctorSchema);
