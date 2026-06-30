import React from 'react';
import './css/Hero.css';
import backgroundImg from '../../assets/contactpagebackground.webp'; // உங்கள் இமேஜ் பாத்

const ContactHero = () => {
  return (
    <section className="unimaxx-contact-hero-wrapper">
      {/* பின்னணி படம் மற்றும் டார்க் லேயர் டின்ட் */}
      <div 
        className="unimaxx-contact-hero-bg"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />
      <div className="unimaxx-contact-hero-overlay"></div>

      {/* சென்டர் கன்டென்ட் பிளாக் */}
      <div className="unimaxx-contact-hero-content">
        <h1 className="unimaxx-contact-hero-title">
          Your Dream Space <br /> Starts Here
        </h1>
      </div>
    </section>
  );
};

export default ContactHero;