import React from 'react'
import { IoMdMenu } from "react-icons/io";
import './Home.css'

const Home = () => {
  return (
    <div className='header'>
        <div className='main-header'>
           <p><IoMdMenu /></p>
        </div>
        <div className='sub-header'>
            <div className='sub-header-top'>
               <h1>avijo</h1>
               <h3>We are always there for you.</h3>
            </div>
            <div className='sub-header-bottom'>
              <h2>What we do?</h2>
              <p>We are on mission to empower Healthcare professionals with information technology and<br/> 
                make Quality healthcare accessible for billions of india with Ayushman Bharat Digital<br/> 
                Mission(ABDM). We Act as a Health information exchange and consent manager at ABDM.<br/> 
                <span>Learn More..</span></p>
            </div>
        </div>
    </div>
  )
}

export default Home