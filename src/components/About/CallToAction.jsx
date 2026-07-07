import React from 'react';
import './css/CallToAction.css';

// குறிப்பு: உங்கள் பின்னணிப் படத்தின் (Background Image) பாதையை இங்கே மாற்றிக்கொள்ளவும்
import bgImage from '../../assets/storybuilding.png'; 
import CtaGooButton from './CtaGooButton';

const CallToAction = () => {
  return (
    <section className="unq-cta-container">
      
      {/* Background Image */}
      <img src={bgImage} alt="Extraordinary Architecture" className="unq-cta-bg-img" />

      {/* Gradient Overlay for Text Readability */}
      <div className="unq-cta-overlay"></div>

      {/* Content Wrapper */}
      <div className="unq-cta-content">
        
        {/* Left Side: Title */}
        <h2 className="unq-cta-title text-center">
          Let’s Build Something <br /> Extraordinary
        </h2>
        
        {/* Right Side: Button */}
        <CtaGooButton />

      </div>

    </section>
  );
};

export default CallToAction;