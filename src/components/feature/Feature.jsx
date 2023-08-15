import React from 'react'
import './feature.css'

import 'aos/dist/aos.css';

import { rectangle55, rectangle56, rectangle59, rectangle60 } from './import'

const Feature = () => {
  return (
    <div className='feature'>
      <div className="feature_header">
        <h1>What we do</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
      </div>
      <div className="feature_section">
        <div className="feature_section-content" data-aos='fade-right' data-aos-duration='2000' data-aos-easing='ease'>
          <img src={rectangle55} alt="picobello" />
          <div className="feature_section-text">
            <h3>Architectural Design</h3>
            <p>From concept development to construction drawings, we handle every phase of the design process with meticulous attention to detail.</p>
          </div>
        </div>
        <div className="feature_section-content" data-aos='fade-right' data-aos-duration='2000' data-aos-easing='ease'>
          <img src={rectangle56} alt="picobello" />
          <div className="feature_section-text">
            <h3>Project Management</h3>
            <p>Our dedicated project managers oversee every aspect, from procurement and scheduling to quality control and stakeholder communication.</p>
          </div>
        </div>
      </div>
      <div className="feature_section">
        <div className="feature_section-content" data-aos='fade-right' data-aos-duration='2000' data-aos-easing='ease'>
          <img src={rectangle59} alt="picobello" />
          <div className="feature_section-text">
            <h3>Construction Administration</h3>
            <p>We provide comprehensive construction administration services, ensuring the smooth implementation of your project plans within budget and to the highest quality standards.</p>
          </div>
        </div>
        <div className="feature_section-content" data-aos='fade-right' data-aos-duration='2000' data-aos-easing='ease'>
          <img src={rectangle60} alt="picobello" />
          <div className="feature_section-text">
            <h3>Interior Design</h3>
            <p>Whether it's a residential, commercial, or hospitality project, we focus on delivering interior designs that leave a lasting impression.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature