import React from 'react';
import {images} from "../../constants"
const SubHeading = ({title}) => (
  <div className=''>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} className='spoon__img'/>
  </div>
);

export default SubHeading;
