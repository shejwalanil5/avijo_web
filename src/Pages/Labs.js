import React from 'react'
import './Labs.css'
import labs from '../assest/labs.png'

const Labs = () => {
  return (
    <div>
      <div className='labs'>
        <div className='labs-left'>
          <img src={labs} alt='logo' />
        </div>
        <div className='labs-right'>
          <h2>For Pathology Lab</h2>
          <p>This app is to manage the medical laboratories system, as it allows users to extract all the required <br />reports from the laboratory and also allows them to follow up on their medical reports.
          </p>
          <p>✔Add/Edit Lab Profile.</p>
          <p>✔Upcoming Test Booking View.</p>
          <p>✔Upcoming Report Pickup View.</p>
          <p>✔ Upload eReport.</p>
          <p>✔eWallet Integration.</p>
          <button>Learn More / Register as Lab</button>
        </div>

      </div>
      <hr />
    </div>
  )
}

export default Labs