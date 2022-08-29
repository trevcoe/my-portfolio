import React from 'react';
import './NavBar.css';
import {BsGithub} from 'react-icons/bs';

function NavBar() {
  return (
    <div className='navbar'>
      <a href='/'>
        <header className='header-name'>Trevor Coe</header>
      </a>
      
        <a href='//github.com/trevcoe'>
            <BsGithub className='social-logo'/>
        </a>
    </div>
  )
}

export default NavBar;