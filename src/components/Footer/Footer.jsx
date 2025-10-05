import React from 'react';
import { assets } from '../../assets/assets'; // Adjust the path as per your project structure
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt='' />
          <p>Lorum Ipsum is simply dummy text of the printing and typesetting industry....</p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt='' />
            <img src={assets.twitter_icon} alt='' />
            <img src={assets.linkedin_icon} alt='' />
          </div>
        </div>
        <div className='footer-content-right'>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='footer-content-center'>
          <h2>Get in Touch</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li> {/* Corrected email address */}
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright 2024 Tomato.com - All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;