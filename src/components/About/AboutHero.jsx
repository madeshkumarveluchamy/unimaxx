import React from 'react';
import './css/AboutHero.css';
// 🎯 உங்க அசெட்ஸ் ஃபோல்டரில் இருக்கும் பேக்ரவுண்ட் இமேஜ் பாத் (தேவைப்பட்டால் மாற்றிக் கொள்ளவும்)
import aboutBgImg from '../../assets/ourstorybackground.webp'; 

const AboutHero = () => {
  return (
    <div className="um-about-hero-wrapper">
      <section 
        className="um-about-hero-section" 
        style={{ backgroundImage: `url(${aboutBgImg})` }}
      >
        {/* லேசான டார்க் பிரீமியம் ஓவர்லே */}
        <div className="um-about-hero-overlay"></div>

        <div className="um-about-hero-content">
          <h1 className="um-about-hero-title font-plus-jakarta">
            Architecting Dreams,<br /> Designing Futures
          </h1>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;