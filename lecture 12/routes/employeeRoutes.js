const express=require("express");
const {
    getEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
} = require("../controller/employeeController.js");
const router=express.Router()

///Read Operation
router.get("/employees",getEmployees)
///employee get by their id
router.get("/employees/:id",getEmployeeById)
//Create
router.post("employees",addEmployee)
//update
router.put("/employees/:id",updateEmployee)
//delete
router.delete("/employees/:id",deleteEmployee)

module.exports=router