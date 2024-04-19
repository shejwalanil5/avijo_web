import React from 'react'
import pharmacy from '../assest/pharmacy.png'
import './Pharmacy.css'

const Pharmacy = () => {
  return (
    <div>
    <div className='pharmacy'>
         <div className='pharmacy-left'>
            <h2>For Pharmacy</h2>
            <p>Medical/pharma store app to sell online also keep them spontaneous with the customer, <br/>sales, and order.
</p>
            <p>✔Create shop profile.</p>
            <p>✔ Add/Edit products.</p>
            <p>✔New/Past order view.</p>
            <p>✔Live order tracking.</p>
            <p>✔eWallet integration.</p>
            <button>Learn More / Register as Pharmacy</button>
         </div>
         <div className='pharmacy-right'>
            <img src={pharmacy} alt='logo'/>
         </div>
         
    </div>
    <hr/>
   </div> 
  )
}

export default Pharmacy