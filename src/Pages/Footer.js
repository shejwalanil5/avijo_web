import React from 'react'
import './Footer.css'
import { SiVectorlogozone } from "react-icons/si";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='main-footer'>
            <div className='footer_company'>
                <h3>Our Company</h3>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
                <p>Term and Condition</p>
            </div>
            <div className='footer_doctors'>
                <h3>For Doctors</h3>
                <p>Profile</p>
                <p>Consultation</p>
                <p>Appointments</p>
                <p>Timing</p>
                <p>Review</p>
            </div>
            <div className='footer_pharmacy'>
               <h3>For Pharmacy</h3>
                <p>Shop Profile</p>
                <p>Products</p>
                <p>Order</p>
                <p>eWallet</p>

            </div>
            <div className='footer_lab'>
                <h3>For Lab</h3>
                <p>Lab Profile</p>
                <p>Test Booking</p>
                <p>Reports</p>
                <p>eWallet</p>
                
            </div>
            <div className='footer_social'>
                <h3>Social</h3>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>YouTube</p>
                <p>LinkedIn</p>
                <p>Twitter</p>
            </div>
        </div>
        <div className='button'>
          <p>India</p>
        </div>
        <div className='footer_bottom'>
            <p>Copy Right© 2024 avijo.All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer