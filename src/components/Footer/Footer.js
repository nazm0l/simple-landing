import React from 'react';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineGlobal } from 'react-icons/ai';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='footer-content'>
            <FaPhoneSquareAlt  className='icon'/>
            <p>Toll free 1800 200 1234</p>
            </div>
            <div className='footer-content'>
            <FaFacebook className='icon'/>
            <p>www.facebook.com/cripumps</p>
            </div>
            <div className='footer-content'>
            <AiOutlineGlobal className='icon'/>
            <p>www.crigroups.com</p>
            </div>
        </footer>
    );
};

export default Footer;