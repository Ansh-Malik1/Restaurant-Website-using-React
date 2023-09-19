import React, { useState } from 'react';

import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images'

const Navbar = () => {
  const [menu , setMenu] = useState(false)
  return(
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht}/>
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Home</a>  <div className='underline'/></li>
      <li className='p__opensans'><a href="#about">About</a> <div className='underline'/></li>
      <li className='p__opensans'><a href="#menu">Menu</a> <div className='underline'/></li>
      <li className='p__opensans'><a href="#awards">Awards</a> <div className='underline'/></li>
      <li className='p__opensans'><a href="#contact">Contact</a> <div className='underline'/></li>
    </ul>
    <div className='app__navbar-login'>
      <a href='#login' className='p__opensans app__login-items'>Login/Register <div className='underline'/></a>
      <div className='divider'></div>
      <a href='/' className='p__opensans  app__login-items'>Book a table <div className='underline'/></a>
    </div>
    <div className='app__navbar-smallscreens'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=> setMenu(true)}/>
      {
        menu && (
        <div className='app__navbar-smallscreens_overlay slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=> setMenu(false)}/>
        <ul className='app__navbar-small-screens-links'>
          <li className='p__opensans'><a href="#home">Home</a>  <div className='underline'/></li>
          <li className='p__opensans'><a href="#about">About</a> <div className='underline'/></li>
          <li className='p__opensans'><a href="#menu">Menu</a> <div className='underline'/></li>
          <li className='p__opensans'><a href="#awards">Awards</a> <div className='underline'/></li>
          <li className='p__opensans'><a href="#contact">Contact</a> <div className='underline'/></li>
        </ul>
      </div>
        )
      }
    </div>
  </nav>
)};

export default Navbar;
