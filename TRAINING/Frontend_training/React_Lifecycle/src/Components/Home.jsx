import React from 'react'
const Home = ({name,setName}) => {
  return (
    <div>
      <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='Enter your name' />
      <h1>{name},Welcome to the site</h1>
    </div>
  )
}

export default Home