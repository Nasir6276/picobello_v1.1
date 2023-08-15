import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='picobello_contact'>
      <div className="picobello_contact-header">
        <h1>Contact Us</h1>
        <p>
          It is a long established fact that a reader 
          will be distracted by the readable content of a page.
        </p>
      </div>
      <div className="picobello_contact-name">
        <div className="picobello_contact-input">
          <p>Full name</p>
          <input type="text" placeholder='Enter your full name' />
        </div>
        <div className="picobello_contact-input">
          <p>Email</p>
          <input type="email" placeholder='Enter your email address' />
        </div>
      </div>
      <div className="picobello_contact-name">
        <div className="picobello_contact-input">
          <p>Project Scope</p>
          <input type="text" placeholder='Enter project Title and scope' />
        </div>
        <div className="picobello_contact-input">
          <p>Project Category</p>
          <input type="text" placeholder='Please Choose' />
        </div>
      </div>
      <div className="picobello_contact-message">
          <p>More Info</p>
          <textarea placeholder="Please  write us additional information about your request"></textarea>
      </div>
      <div className="picobello_contact-button">
        <button>Send Message</button>
      </div>
    </div>
  )
}

export default Contact