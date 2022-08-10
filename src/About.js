import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const About = () => {
  let {search} = useLocation();
  let params = new URLSearchParams(search)
  console.log(search)
  return (
    <div>
        <center>
            <h4>This is About Page</h4>
            <p>Last Name : {params.get('name')}</p>
            <p>Age : {params.get('age')}</p>
            <Link to = '/homepage' className='Link'>Back to HomePage</Link>
        
        </center>
    </div>
  )
}

export default About