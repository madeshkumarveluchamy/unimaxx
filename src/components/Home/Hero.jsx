import React from 'react';
import './css/Hero.css';
import bgVideo from '../../assets/unimaxx1(1).mp4';
import bgImage from '../../assets/storybuilding.webp'; 
import { FaArrowRight } from 'react-icons/fa';
import StoryHeroGooButton from '../story/StoryHeroGooButton';

const Hero = () => {
  // 🎯 Text மறைவதற்கான (setTimeout) கோடுகள் அனைத்தும் நீக்கப்பட்டுவிட்டன

  return (
    <div className="unimaxx-master-wrapper">
      
      <section 
        className="unimaxx-hero-section"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        
        {/* BACKGROUND VIDEO */}
        <video 
          className="unimaxx-hero-video" 
          src={bgVideo} 
          poster={bgImage} 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"       
        ></video>

        {/* OVERLAY */}
        <div className="unimaxx-overlay"></div>

        {/* 🎯 CENTER CONTENT: 'content-visible / hidden' லாஜிக் நீக்கப்பட்டு நேரடியாக கொடுக்கப்பட்டுள்ளது */}
        <main className="unimaxx-hero-content">
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