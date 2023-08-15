import React from 'react'
import './team.css'

import 'aos/dist/aos.css';

const Team = () => {
  return (
    <div className='picobello_team'>
      <div className="picobello_team-header">
        <h1>The Team</h1>
        <p>
          It is a long established fact that a reader 
          will be distracted by the readable content of a page.
        </p>
      </div>
      <div className="picobello_team-members">
        <div className="picobello_member" data-aos='fade-right' data-aos-duration='2000' data-aos-easing='ease'>
          <div>

          </div>
          <p>Bello Oben’ Umar</p>
          <span>Principal Partner</span>
        </div>
        <div className="picobello_member" data-aos='fade-right' data-aos-duration='2200' data-aos-easing='ease'>
          <div>

          </div>
          <p>Zainab M. Mohammed</p>
          <span>Creative Lead</span>
        </div>
        <div className="picobello_member" data-aos='fade-right' data-aos-duration='2400' data-aos-easing='ease'>
          <div>

          </div>
          <p>Farida A. Mohammed</p>
          <span>Business Development Lead</span>
        </div>
      </div>
    </div>
  )
}

export default Team