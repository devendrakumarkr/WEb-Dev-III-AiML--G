const Doctor = require("../model/doctors.model.js");

const getDoctors= async (req, res) => {
    try {
        const doctors = await Doctor.find();    
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const getDoctorById= async (req, res) => {
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
}

const addDoctor= async (req, res) => {
    console.log(req.body)
    try {
        const doctor = await Doctor.create(req.body);
        res.status(201).json(doctor);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const updateDoctor=async (req, res) => {
    const id = req.params.id;
    try {
        const doctor = await Doctor.findByIdAndUpdate(id, req.body,{new:true,runValidators:true});
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const deleteDoctor=async (req, res) => {
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
}

module.exports={
    getDoctors,
    getDoctorById,
    addDoctor,
    updateDoctor,
    deleteDoctor
}