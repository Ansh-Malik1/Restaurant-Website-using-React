import React from 'react';

import './Laurels.css';
import {images , data} from "../../constants"
import {SubHeading } from '../../components';

const AwardCard = ({award})=>{
  return(
  <div className='app_laurels_awards-card'>
    <img src={award.imgUrl}/>
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color:'#DCCA87'}}>{award.title}</p>
      <p className='p__cormorant' style={{}}>{award.subtitle}</p>
    </div>
  </div>
)}
const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards And Recogonition'/>
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className='app_laurel_awards'>
        {
          data.awards.map((award , i)=> <AwardCard key={i} award={award}/>)
        }
      </div>

    </div>
    <div className='app__wrapper_img'>
      <img src={images.laurels}/>
    </div>
  </div>
);

export default Laurels;
