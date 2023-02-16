import React from 'react'
import Navbar from '../components/Navbar'
import './home.css'

const Home = () => {
  return (
    <div className='homeCont'>
        <Navbar/>
        <br />
        <br />
        <div className="container mt-5">
            <h1 className='header'>Welcome to Notes App</h1>
        </div>
        
    </div>
  )
}

export default Home