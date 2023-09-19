import React from 'react';

import './Chef.css';
import {images} from "../../constants"
import {SubHeading} from '../../components'
const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef}/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote}/>
          <p className='p__opensans' style={{fontSize:'smaller', flex:'1'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis mauris ac libero ullamcorper, non cursus dui auctor. 
          </p>
        </div>
        <p className='p__opensans' style={{fontSize:'smaller'}}>Aliquam nulla nunc, vestibulum sed tincidunt quis, convallis fermentum felis. Vestibulum rhoncus congue sem eget tempus. Cras tempor commodo dolor quis tempus.</p>
      </div>
      <div className='app__chef-sign'>
        <p style={{fontFamily:'var(--font-base)' , color:'var(--color-golden)' , fontSize:'2rem'}}>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} className='app__chef-sign-img'/>
      </div>
    </div>
  </div>
);

export default Chef;
