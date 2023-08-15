import React from 'react'
import './brand.css'
import { logikalmedia, koala, uniabuja, doas, hillacedemy } from './import';

const Brand = () => {
  return (
    <div className='pkb__brand'>
      <div className='pkb__brand-text'>
        <p>We are trusted by</p>
      </div>
      <div className="pkb__brand-images">
        <div className="pkb__brand-image_slider">
          <div>
            <img src={logikalmedia} alt="logikalmedia" />
          </div>
          <div>
            <img src={koala} alt="koala" />
          </div>
          <div>
            <img src={uniabuja} alt="uniabuja" />
          </div>
          <div>
            <img src={doas} alt="doas" />
          </div>
          <div>
            <img src={hillacedemy} alt="hillacedemy" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand