import React from 'react'
import './Hero.css'
import image from '../assest/image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='heroSection-top'>
        <img src={image} alt="Logo" />
        </div>
        <div className='heroSection-bottom'>
            <h2>Ayushman Bharat Digital Mission (ABDM)</h2>
            <p>The Ayushman Bharat Digital Mission (ABDM) aims to develop the backbone necessary to <br/>
                support the integrated digital health infrastructure of the country. It will bridge the existing <br/>
                gap amongst different stakeholders of Healthcare ecosystem <br/>
                through digital highways. <span>Learn more..</span>
            </p>
        </div>
        <hr/>
    </div>
  )
}

export default Hero