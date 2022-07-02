import React from 'react';
import './Work.css';
import img1 from '../Assets/Images/virtual-vpn.png';
import img2 from '../Assets/Images/yummy.png';

function Work() {
  return (
    <>
    <div className='title'>Things I've created</div>
        <div className='my-work-images'>
            <img className='virtual-vpn' src={img1} alt='virtual-vpn'></img>
            <img className='yummy' src={img2} alt='yummy'></img>
        </div>
    </>
  )
}

export default Work;

