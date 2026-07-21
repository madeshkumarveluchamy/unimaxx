import React from 'react';
import './css/Hero.css'; 
import bgImg from '../../assets/unimaxxbackground.webp';
import { FaArrowRight } from 'react-icons/fa';
import StoryHeroGooButton from '../story/StoryHeroGooButton';

const Hero = () => {
  return (
    <div className="unimaxx-master-wrapper">
      <section 
        className="unimaxx-hero-section" 
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="unimaxx-overlay"></div>

        <main className="unimaxx-hero-content">
          <h1 className="unimaxx-main-title font-geist">
            Architecting the<br />Soul of Space
          </h1>
          
          <StoryHeroGooButton />
        </main>

        {/* 🎯 INFINITE RUNNING LETTERS ENGINE */}
        <div className="unimaxx-marquee-container font-serief">
          <div className="unimaxx-marquee-track">
            <span>UNIMAXX ARCHITECTS</span>
            <span>UNIMAXX ARCHITECTS</span>
            <span>UNIMAXX ARCHITECTS</span>
            <span>UNIMAXX ARCHITECTS</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;