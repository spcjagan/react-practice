import React from 'react'
import { Link } from 'react-router-dom'
import  { useLocation } from 'react-router-dom'

const Dashboard = () => {
    let { search } = useLocation();
    let params = new URLSearchParams(search);
    console.log(search);
      
  return (
    <div>
        <center>
            <h4>This is Dashboard Page</h4>
            <p>Name: {params.get('name')}</p>
            <p> Age: {params.get('age')}</p>
            <Link to = '/HomePage' className='Link'>Back to HomePage</Link>
            </center>
    </div>
  )
}

export default Dashboard