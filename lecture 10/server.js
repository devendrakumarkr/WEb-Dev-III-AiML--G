const express=require("express");
const app=express()

//middleware
app.use(express.json()); //data parse coming as json

const employees=[
    {empId:1, name:"Rihan", salary:100000, department:"IT"},
    {empId:2, name:"Shraddha", salary:60000, department:"HR"},
    {empId:3, name:"Amit", salary:30000, department:"Finance"},
    {empId:4, name:"Vaibhav", salary:40000, department:"IT"},
    {empId:5, name:"Rudra", salary:40000, department:"Sales"},

]


///Read Operation
app.get("/employees",(req,res)=>{
    res.json(employees)
})
///employee get by their id
app.get("/employees/:id",(req,res)=>{
    const id=req.params.id;
    const employee=employees.find((employee)=>employee.empId===Number(id));
    if(!employee){
        res.status(404).json({success:false, message:"employee not found"});
    }
    res.json({success:true,employee});
    
})

//Create
app.post("/employees",(req,res)=>{
    const employee=req.body;
    employees.push({empId:employees.length+1,...employee});
    res.json({success:true,employee});  
})

//update
app.put("/employees/:id",(req,res)=>{
    const id=req.params.id;
    const employee=req.body;
    const result=employees.find((employee)=>employee.empId===Number(id));
    if(!result){
        res.status(404).json({success:false, message:"employee not found"});
    }
    result.name=employee.name??result.name;
    result.salary=employee.salary??result.salary;
    result.department=employee.department??result.department;
    res.json({success:true,employee});
})

//delete
app.delete("/employees/:id",(req,res)=>{
    const id=req.params.id;
    const result=employees.find((employee)=>employee.empId===Number(id));
    if(!result){
        res.status(404).json({success:false, message:"employee not found"});
    }
    employees.splice(id-1,1);
    res.json({success:true,result});
})

app.listen(3000,()=>console.log("server is running on port 3000"));