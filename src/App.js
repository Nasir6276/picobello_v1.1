import React from 'react'
import './App.css'

import 'aos/dist/aos.css';

import { Footer, Contact, Projects, Team, Header, Picobello } from './containers'
import { Brand, Feature, Navbar } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar /> 
        <div className='navbar' data-aos='zoom-in' data-aos-duration='2000' data-aos-easing='ease'>
          <Header />  
        </div>
        <Brand />
        <Feature />
        <Picobello />
        <Projects />
        <Team />
        <Contact />
        <Footer />
      </div>      
    </div>
  )
}

export default App