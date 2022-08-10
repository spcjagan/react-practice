import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
const HomePage = () => {
  const user = "Jagan"
  const user1 = "Mohan"
  
  return (
    <div>
        <center>
            <h1>Welcome to HomePage</h1> 
            <Link to = {`/dashboard/?name=${user}&age=${22}`} className='Link'>Dashboard</Link> {        }
            <Link to = {`/about/?name=${user1}&age=${22}`} className='Link'>About</Link>
            </center>
    </div>
  )
}

export default HomePage