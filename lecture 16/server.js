const express=require("express");
const morgan=require("morgan");
const app=express();
const PORT=3000

// app.use(morgan())

const logMiddleware=(req,res,next)=>{
    // console.log(req.name)
    req.name="John Doe";
    console.log("Request url:",req.url,"req method:",req.method,"Time:",new Date().toLocaleString());
    // res.send("Hello from middleware");
    next();
}

const apiCheckMiddleware=(req,res,next)=>{
    if(req.query.API_KEY==="1234"){
        console.log("Authenthicated");
        next();
    }else{
        res.send("API invalid");
    }
}

app.use(logMiddleware);
// app.use(apiCheckMiddleware) ///global middleware


app.get("/",(req,res)=>{
    console.log("Request name:",req.name);
    console.log("Hello World");
    res.send("Hello World");
})

app.get("/data",apiCheckMiddleware,(req,res)=>{   //route level middleware
    console.log("Hello Data");
    res.json({
        city:"New York",
        country:"USA",
        temp:32,
        humidity:80
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})