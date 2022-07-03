import React from 'react';
import './Work.css';
import img1 from '../Assets/Images/virtual-vpn.png';
import img2 from '../Assets/Images/yummy.png';

function Work() {
  return (
    <>
    <div className='title'>Things I've created</div>
        <div className='my-work-images'>
            <a href='https://virtual-vpn.herokuapp.com'>
              <img className='virtual-vpn' src={img1} alt='virtual-vpn'></img>
              <div className='img-caption'>Virtual-VPN</div>
            </a>
            <a href='//yummy-recipes1.herokuapp.com'>
              <img className='yummy' src={img2} alt='yummy'></img>
              <div className='img-caption'>Yummy</div>
            </a>
        </div>
    </>
  )
}

export default Work;

