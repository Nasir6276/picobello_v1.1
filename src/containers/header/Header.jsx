import React, { useEffect } from 'react'
import './header.css'

import Lottie from 'lottie-react'
import AOS from 'aos';

import arrow from '../../img/Nas2.json'
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='pkb__header' id='Home'>
      <div className="pkb__header-content">
        <h1>Innovative Design with Practical Applications</h1>
        <p>
          We are a leading architecture and project management firm committed 
          to delivering innovative and sustainable solutions for your construction 
          projects. With our expertise and experience, we transform ideas into reality, 
          creating spaces that inspire, function efficiently, and exceed expectations.
        </p>
        <button>Start a project</button>
      </div>
      <div className="scroll">
        <Lottie animationData={arrow} style={{ height: '100px', width: '100px' }} />
      </div>
    </div>
  )
}

export default Header