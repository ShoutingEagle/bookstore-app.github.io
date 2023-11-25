import React from 'react';
import Icon from '../Assets/asset-icon.png';
import Booklist from '../Assets/asset-booklist.png';
import Notification from '../Assets/asset-notification.png';
import Wishlist from '../Assets/asset-wishlist.png';
import UserIcon from '../Assets/asset-userIcon.png';

function Navbar() {
  return (
    <div className='navbar'>
      
        <div className='navbar-left'>
        <img src={Icon}/>
        <div className='navbar-name'>
          <span className='first'>KeazoN</span>
          <span className='second'>BOOKS</span>
        </div>
        </div>

        <div className='navbar-searchbar'>
          <input type='text' className='navbar-search'/>
          <button className='navbar-search-button'>Search</button>
        </div>

        <div className='navbar-right'>
          <img src={Wishlist}/>
          <img src={Notification}/>
          <img src={Booklist}/>
          <img src={UserIcon}/>
        </div>
        

    </div>
  )
}

export default Navbar