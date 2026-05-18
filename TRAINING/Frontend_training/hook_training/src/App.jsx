import { useState,useEffect } from "react"
import React from 'react'

const App = () => {
  const [count,setCount]= useState(0)
  function add(){
  setCount(c=>c+1)
  }
  function sub(){
    setCount(c=>c-1)
  }
  useEffect(()=>{
    document.title=count
    console.log("changed the title")
  },[count])

  return (
    <div>
      <h1>USESTATE</h1>
      <h2>COUNT:{count}</h2>
      <button onClick={add}>ADD</button>
      <button onClick={sub}>SUB</button>
      
    </div>
  )
}

export default App
