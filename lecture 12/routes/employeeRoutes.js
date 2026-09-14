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
router.get("/",getEmployees)
///employee get by their id
router.get("/:id",getEmployeeById)
//Create
router.post("/",addEmployee)
//update
router.put("/:id",updateEmployee)
//delete
router.delete("/:id",deleteEmployee)

module.exports=router