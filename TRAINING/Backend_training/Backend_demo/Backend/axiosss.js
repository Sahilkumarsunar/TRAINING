const express = require("express")
const cors= require("cors")
const PORT=5000
const app =express()
app.use(
  cors({
    origin: "http://localhost:5173"
  })
);
app.use(express.json())

// fake database
let users=[
  {
    "id": 1,
    "name": "Sahil",
    "rollno": 2232899,
    "age": 21,
    "course": "MERN"
  },
  {
    "id": 2,
    "name": "Rahul",
    "rollno": 2232900,
    "age": 22,
    "course": "Python"
  },
  {
    "id": 3,
    "name": "Aman",
    "rollno": 2232901,
    "age": 20,
    "course": "Java"
  },
  {
    "id": 4,
    "name": "Priya",
    "rollno": 2232902,
    "age": 23,
    "course": "Data Science"
  },
  {
    "id": 5,
    "name": "Neha",
    "rollno": 2232903,
    "age": 21,
    "course": "Machine Learning"
  },
  {
    "id": 6,
    "name": "Karan",
    "rollno": 2232904,
    "age": 24,
    "course": "Full Stack"
  },
  {
    "id": 7,
    "name": "Riya",
    "rollno": 2232905,
    "age": 22,
    "course": "Cyber Security"
  },
  {
    "id": 8,
    "name": "Arjun",
    "rollno": 2232906,
    "age": 20,
    "course": "Cloud Computing"
  },
  {
    "id": 9,
    "name": "Simran",
    "rollno": 2232907,
    "age": 23,
    "course": "AI"
  },
  {
    "id": 10,
    "name": "Vikas",
    "rollno": 2232908,
    "age": 21,
    "course": "DevOps"
  }
]

app.get("/api/users",(req,res)=>{
   console.log(" GET api/users")
   res.json(users)
})

app.listen(PORT,()=>{
    console.log("server running PORT:",PORT)
})
