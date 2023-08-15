import React, {useState} from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'
import './navbar.css';
import logo from '../../img/logo.svg';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#about'>About Us</a></p>
  <p><a href='#project'>Projects</a></p>
  <p><a href='#team'>Team</a></p>
  <button>Contact Us</button>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='pkb__navbar'>
      <div className='pkb__navbar-links'>
        <div className='pkb__navbar-links_logo'>
          <img src={logo} alt="" />
        </div>
      </div>
        <div className='pkb__navbar-links_container'>
            <Menu />
        </div>
        <div className='pkb__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#58585A' size={35} onClick={() => setToggleMenu(false)} />
            : <RiMenuLine color='#58585A' size={35} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='pkb__navbar-menu_container scale-up-center'>
              <div className='pkb__navbar-menu_container-links'>
                <Menu />
                <div className='pkb__navbar-menu_container-links-media'>
                  {/* <p><a href="#">Logikal Media</a></p> */}
                 </div>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default Navbar