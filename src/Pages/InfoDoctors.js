import React from 'react'
import doctors from '../assest/doctors.png'
import './InfoDoctors.css'

const InfoDoctors = () => {
  return (
    <div className='infoDoctors'>
        <h1>Health Information Providers</h1>
        <div className='information-doctors'>
        <div className='infoDoctors-left'>
          <img src={doctors} alt="Logo" />
        </div>
        <div className='infoDoctors-right'>
            <h2>For Doctors</h2>
            <p>Keep track of your Patient’s Health with this powerful app that makes it easy to <br/>communicate with them.</p>
            <p>✔Create professional profile.</p>
            <p>✔Set available timings.</p>
            <p>✔Video Consultation, Accept/Reject appointments.</p>
            <p>✔Real-time chat with patient.</p>
            <p>✔Read patient reviews</p>
            <button>Learn More / Register as Doctor</button>
        </div>
        </div>
        <hr/>
    </div>
  )
}

export default InfoDoctors