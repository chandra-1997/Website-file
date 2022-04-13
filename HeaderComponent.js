import React from 'react';
import './Header.css';

 
const Header = () => {
    return (
        <div className="header">
            <nav>
            <a className="navbar-brand me-5" href="#">
           <img src='images/R.png'  style={{ maxWidth: '50px' }}/>
           </a>
        <input className="ms-5 rounded rounded-2"  type="text" id="search" placeholder="Search" />
                <a href="/">Home</a>
                <a className='bi bi-cart4' href="/cart"></a>
                <a className='bi bi-person-circle' href="/profile"></a>
            </nav>
        </div>
    );
};
export default Header;