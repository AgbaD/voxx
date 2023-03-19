import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../img/logo.png';
// import menu from '../../img/menu.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} width={100} height={100} className='logo' alt='logo'/>
      <nav>
        <ul>
          <Link className='li' to='/'>Home</Link>
          <Link className='li' to='/about'>About</Link>
          <Link className='li' to='/services'>Services</Link>
        </ul>
      </nav>
      {/* <img src={menu} width={100} height={100} className='menu-icon' alt='menu' /> */}
    </div>
  )
}

export default Navbar