const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    specialization: {
        type: String,
        required: true ,
    },
    experience: {
        type: Number,
        required: true
    },
    fees: {
        type: Number,
        required: true,
        min:500,
    },
    salary:{
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    gender:{
        type:String,
        enum:["Male","Female"]
    }
},{timestamps: true});

module.exports = mongoose.model('doctors', doctorSchema);
