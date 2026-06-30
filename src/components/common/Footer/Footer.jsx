import React from 'react';
import { Link } from 'react-router-dom'; // 🎯 React Router Link இம்போர்ட் பண்ணியாச்சு
import './Footer.css';

import unimaxxlogo from '../../../assets/unimaxxlogo.webp';
import { FaInstagram, FaFacebookF, FaXTwitter, FaPinterestP } from 'react-icons/fa6';
import DreamConnection from './DreamConnection';

const Footer = () => {
  return (
    <footer className="um-footer-master">
      <div className="um-footer-container">
        
        {/* Main 3-Column Layout */}
        <div className="um-footer-grid">
          
          {/* Column 1: Logo & CTA */}
          <div className="um-footer-col um-footer-brand-col text-center text-md-start">
            <div className="um-footer-logo-box">
              <img src={unimaxxlogo} alt="Unimaxx Logo" />
            </div>
            <h2 className="um-footer-cta-title ftit font-serief text-center text-md-start">START YOUR <br />DREAM SPACE</h2>
            <p className="um-footer-brand-desc font-inter fmin s text-center text-md-start">
              Minimal, Premium, Eternal — we care for your emotion and our commitment to timeless design.
            </p>
            <div className="text-center text-md-start">
              {/* 🎯 Let's Connect கிளிக் பண்ணா Start a project பேஜுக்கு போக செட் பண்ணியாச்சு */}
              <Link to="/start-a-project" style={{ textDecoration: 'none' }} className="text-decoration-none">
            <DreamConnection />
  </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="um-footer-col um-footer-links-col text-center text-md-start">
            <h3 className='font-serief text-center text-md-start'>Quick Links</h3>
            <ul className="um-footer-links-list">
              {/* 🎯 பழைய href தூக்கிட்டு App.js-ல இருக்குற exact paths-ஐ Link-ஆ மாத்தியாச்சு */}
              <li><Link to="/" className='font-geist fmin text-decoration-none'>Home</Link></li>
              <li><Link to="/projects" className='font-geist fmin text-decoration-none'>Projects</Link></li>
              <li><Link to="/what-we-deliver" className='font-geist fmin text-decoration-none'>What We Deliver</Link></li>
              <li><Link to="/projects" className='font-geist fmin text-decoration-none'>Our Story</Link></li>
              <li><Link to="/start-a-project" className='font-geist fmin text-decoration-none'>Contact</Link></li>
              <li><Link to="/" className='font-geist fmin text-decoration-none'>Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Get In Touch & Address */}
          <div className="um-footer-col um-footer-contact-col text-center text-md-start">
            <h3 className='font-serief ftit text-center text-md-start'>Get In Touch</h3>
            <address className="um-footer-address font-geist fmin text-center text-md-start">
              Poompuhar Nagar Annex, Avinashi Rd, behind Haribhavanam, Goldwins, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014
            </address>
            <div className="um-footer-contact-details text-center text-md-start">
              <p className='font-geist fsub'>Call us: <a href="tel:04222696100" className='fmin'>0422 269 6100</a></p>
              <p className='font-geist fsub'>Email: <a href="mailto:Admin@unimaxx.com" className='fmin'>Admin@unimaxx.com</a></p>
            </div>
            
            {/* Social Icons row */}
            <div className="um-footer-socials">
              <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
              <a href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#x" aria-label="Twitter"><FaXTwitter /></a>
              <a href="#pinterest" aria-label="Pinterest"><FaPinterestP /></a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="um-footer-bottom-bar text-center">
          <p className='font-geist fmin'>© 2026 Unimaxx Architects & Interiors. All Rights Reserved. Designed by Team Kriya.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;