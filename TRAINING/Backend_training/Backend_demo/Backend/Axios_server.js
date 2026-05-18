const express = require("express")
const cors= require("cors")
const PORT=5000
const app =express()
app.use(cors());
app.use(express.json())

// fake database
let user={
    id:1,
    name:"sahil",
    rollno:2232899,
    Age:21,
    course:"MERN",
};

// GET Fetch user 
app.get("api/user",(req,res)=>{
    console.log("📩 GET /api/user")
    res.json(user)
})

// post create user 
app.post("api/user",(req,res)=>{
    console.log("📩 POST /api/user")
    console.log("Data recieved",req.body)

    res.json({
        message:"User created",
        user,
    })
})

// put replace user
app.put("api/user",(req,res)=>{
    console.log("put/api/user")
    console.log("full data recieved",req.body)
    user=req.body
    res.json({
        message:"full data repplaced",
        user,
    })

})
// patch partial data 
app.patch("api/user",(req,res)=>{
    console.log("patch/api/user")
    console.log("partial data recieved",req.body)
    user={...user,...req.body}
    res.json({
        message:"partial data repplaced",
        user,
    })
})

app.delete("api/user",(req,res)=>{
    console.log("delete/api/user")
    console.log("delet data",req.body)
    res.json({
        message:"data deleted",
        user,
    })
})
// server 
app.listen(PORT,()=>{
    console.log("server created at PORT:",PORT)
})