import React from 'react'
import './projects.css'

import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 300;
  }

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 300;
  }

  return (
    <div className='picobello_projects'>
      <div className="picobello_projects-section">
        <div className="picobello_projects-header">
          <h1>Our Projects</h1>
          <p>
            Explore our portfolio to witness our diverse range of 
            successful projects, showcasing our commitment to excellence 
            and client satisfaction. Contact us today to discuss your upcoming project and let us transform your vision into reality.
          </p>
        </div>
        <div className='project-icons'>
          <p onClick={slideLeft}><FontAwesomeIcon icon={faArrowLeft} /></p>
          <p onClick={slideRight}><FontAwesomeIcon icon={faArrowRight} /></p>
        </div>
      </div>
      <div className="picobello_slider" data-aos='fade-right' data-aos-duration='2000' data-aos-easing='ease' id='slider'>
        <div className="picobello_slider-card">
          <p>Project Name</p>
          <span>See more <FontAwesomeIcon icon={faArrowRight} /></span>
        </div>
        <div className="picobello_slider-card">
          <p>Project Name</p>
          <span>See more <FontAwesomeIcon icon={faArrowRight} /></span>
        </div>
        <div className="picobello_slider-card">
          <p>Project Name</p>
          <span>See more <FontAwesomeIcon icon={faArrowRight} /></span>
        </div>
        <div className="picobello_slider-card">
          <p>Project Name</p>
          <span>See more <FontAwesomeIcon icon={faArrowRight} /></span>
        </div>
        <div className="picobello_slider-card">
          <p>Project Name</p>
          <span>See more <FontAwesomeIcon icon={faArrowRight} /></span>
        </div>
        <div className="picobello_slider-card">
          <p>Project Name</p>
          <span>See more <FontAwesomeIcon icon={faArrowRight} /></span>
        </div>
      </div>
    </div>
  )
}

export default Projects