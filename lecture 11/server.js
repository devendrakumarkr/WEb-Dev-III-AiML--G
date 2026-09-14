const express=require("express");
const app=express()

app.use(express.json())

app.get("/:id",(req,res)=>{
    // console.log(req.url)
    // console.log(req.method)
    // console.log(req.headers)
    console.log(req.params.id)
    res.send("Hello Students from id route");
})

app.get("/",(req,res)=>{
    console.log(req.query.name)
    console.log(req.query.age)
    res.send("Hello Students from / route");
})

app.post("/",(req,res)=>{
    // console.log(req.body)
    res.send("Hello Students"); //send, json, status
})

app.listen(3000,()=>console.log("server is running on port 3000"));