import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <center>
            <h4>This is About Page</h4>
            <Link to = '/HomePage' className='Link'>Back to HomePage</Link>
        </center>
    </div>
  )
}

export default About