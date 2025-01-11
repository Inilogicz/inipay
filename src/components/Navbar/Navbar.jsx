import React from 'react';
import "./Navbar/Navbar.css";
import Logo from '../Logo/Logo';
import { Search } from 'lucide-react';
import { BellRing } from 'lucide-react';
import profile from '../../assets/profile.jpg'
import { Menu } from 'lucide-react';
const Navbar = ({onMenuClick}) => {
  return (
    <nav className='navbar'>
      <Logo/>
      <div className="search-bar">
        <input type="text" placeholder='Search history' />
        <div className="icon-wrapper">
            <Search/>

        </div>
      </div>
      <div className="user">
          <div className="icon-wrapper">
            <BellRing/> 
          </div> 
          <div className="profile">
              <img src={profile} alt="" />    
          </div> 
        <div className="rounded-icon-btn menu-btn" onClick={onMenuClick}>
            <Menu/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
