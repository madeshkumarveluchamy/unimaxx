import React, { useState, useEffect } from 'react';
import './css/Hero.css';
import bgVideo from '../../assets/unimaxx1(1).mp4';
import { FaArrowRight } from 'react-icons/fa';
import StoryHeroGooButton from '../story/StoryHeroGooButton';

const Hero = () => {
  // 🎯 5 வினாடிகளுக்குப் பிறகு Content-ஐ மறைக்க State
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // 5000ms (5 வினாடிகள்) கழித்து showContent-ஐ false ஆக மாற்றுதல்
    const timer = setTimeout(() => {
      setShowContent(false);
    }, 5000); 

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return (
    <div className="unimaxx-master-wrapper">
      <section className="unimaxx-hero-section">
        
        {/* 🎯 BACKGROUND VIDEO */}
        <video 
          className="unimaxx-hero-video" 
          src={bgVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
        ></video>

        {/* 🎯 OVERLAY (கருப்பு நிற லேயர்) */}
        <div className="unimaxx-overlay"></div>

        {/* 🎯 CENTER CONTENT (Text & Button) - Condition மூலம் CSS Class மாறும் */}
        <main className={`unimaxx-hero-content ${showContent ? 'content-visible' : 'content-hidden'}`}>
          <h1 className="unimaxx-main-title font-geist">
            Architecting the<br />Soul of Space
          </h1>
          
          <StoryHeroGooButton />
        </main>

      </section>
    </div>
  );
};

export default Hero;