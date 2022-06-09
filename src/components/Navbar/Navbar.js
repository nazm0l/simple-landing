import React from 'react';
import './Navbar.css'
import logo from '../../asserts/logo.png'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <img src={logo} alt="logo" />
        </div>
    );
};

export default Navbar;