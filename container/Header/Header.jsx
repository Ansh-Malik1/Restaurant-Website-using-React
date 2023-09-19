import React from 'react';
import {images} from "../../constants"
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper-info' style={{marginBottom:'2rem'}}>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The key to fine dining.</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper__img'><img src={images.welcome}/></div>
  </div>
);

export default Header;
