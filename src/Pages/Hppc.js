import React from 'react'
import hppc from '../assest/hppc.png'
import './Hppc.css'

const Hppc = () => {
  return (
    <div className='hppc'>
        <div className='hpcc-main'>
           <div className='hppc-left'>
            <h2>For HPP Company</h2>
            <p>This app is to manage the medical laboratories system, as it allows users to extract all the <br/>required reports from the laboratory and also allows them to follow up on their medical reports.
</p>
            <p>✔Add/Edit Lab Profile.</p>
            <p>✔Upcoming Test Booking View.</p>
            <p>✔Upcoming Report Pickup View.</p>
            <p>✔ Upload eReport.</p>
            <p>✔eWallet Integration.</p>
            <button>Learn More / Register as Lab</button>
           </div>
           <div className='hppc-right'>
            <img src={hppc} alt='logo'/>
           </div>
        </div>
        <hr/>
    </div>
  )
}

export default Hppc