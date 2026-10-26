const express = require('express');
const mongoose = require('mongoose');
const Doctor = require('./doctors.model.js');
const app = express();
const port = 3000;



app.get('/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find();    
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});


mongoose.connect("mongodb://localhost:27017/HospitalDB").then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})