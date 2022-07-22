import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'
const HomePage = () => {
    let user = "Jagan";
    let age = 21;
  return (
    <div>
        <center>
            <h1>Welcome to HomePage</h1> 
            <Link to = {`/dashboard/?Name= ${user}&Age= ${age}`} className='Link'>Dashboard</Link> {""}
            <Link to = '/About' className='Link'>About</Link>
            </center>
    </div>
  )
}

export default HomePage