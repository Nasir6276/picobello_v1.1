import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='picobello_footer'>
      <div className="picobello_footer-social">
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
        <p>Linkedin</p>
      </div>
      <div className="picobello_footer-contact">
        <p>+234 (810) 456 7898</p>
        <p>info@pico-belloprojekte.com</p>
      </div>
      <div className="picobello_footer-location">
        <p>3, Eket Close, Area 8, Garki, Abuja FCT.</p>
      </div>
      <div className="picobello_footer-copy">
        <p>Copyright Pico Bello Projekte 2023 All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer