import React ,{useState}from 'react'
import Home from "./Components/Home.jsx"
const App = () => {
  const [name,setName]=useState("USER")
  return (
    <div>
       
      <Home name= {name}  setName={setName} />
    </div>
  )
}

export default App
