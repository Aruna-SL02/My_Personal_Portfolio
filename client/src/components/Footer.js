import React from 'react';
import './Footer.css';
import { FaHeart, FaCode } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        
        <p className="copyright">
          &copy; {currentYear} <strong>Aruna Sampath Liyanaarachchi</strong>. All Rights Reserved.
        </p>
        
        <p className="credit">
          Designed & Built with <FaCode className="icon-code" /> and <FaHeart className="icon-heart" /> using the <strong>MERN Stack</strong>.
        </p>

        {/* Optional: Quick Scroll-to-Top Link */}
        <a href="#home" className="scroll-top">Back to Top</a>
      </div>
    </footer>
  );
};

export default Footer;