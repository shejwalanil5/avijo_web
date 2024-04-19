import React from 'react'
import information from '../assest/information.png'
import './Information.css'

const Imformation = () => {
  return (
    <div className='information'>
      <h1>Health Information Users</h1>
      <div className='information-user'>
        <div className='information-left'>
          <h2>User App</h2>
          <p>It helps the users in locating the best specialist around them, also can order medicine, <br />find a hospital
            and Lab, etc.</p>
            <p></p>
          <p>✔ Find nearby doctors, hospitals. & Lab w/map.</p>
          <p>✔Book appointments, video consultation with Doctor.</p>
          <p>✔Multi-vendor medicine and health product ordering.</p>
          <p>✔Book appointments home sample collection for Lab test.</p>
          <button>Learn More / Register as User</button>
        </div>
        <div className='information-right'>
          <img src={information} alt="Logo" />
        </div>
      </div>
      <hr/>
    </div>
    
  )
}

export default Imformation