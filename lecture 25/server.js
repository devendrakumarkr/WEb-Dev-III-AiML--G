const express = require('express');
const mongoose = require('mongoose');
const Doctor = require('./model/doctors.model.js');
const app = express();
const port = 3000;


app.use(express.json())
//Read Operation
app.get('/api/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find();    
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

///get doctors by id 
app.get('/api/doctors/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const doctor = await Doctor.findById(id);
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})

////Create operation
app.post("/api/doctors", async (req, res) => {
    console.log(req.body)
    try {
        const doctor = await Doctor.create(req.body);
        res.status(201).json(doctor);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.put("/api/doctors/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const doctor = await Doctor.findByIdAndUpdate(id, req.body,{new:true});
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.delete("/api/doctors/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const doctor = await Doctor.findByIdAndDelete(id);
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }
        res.json(doctor);
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