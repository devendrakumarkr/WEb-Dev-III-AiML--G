const express = require('express');
const router = express.Router();
const { getDoctors, 
    getDoctorById, 
    addDoctor, 
    updateDoctor, 
    deleteDoctor } = require('../controller/doctors.controller.js');

//Read Operation
router.get('/api/doctors', getDoctors);

///get doctors by id 
router.get('/api/doctors/:id', getDoctorById);

////Create operation
router.post("/api/doctors", addDoctor);

router.put("/api/doctors/:id", updateDoctor);

router.delete("/api/doctors/:id", deleteDoctor);

module.exports=router;