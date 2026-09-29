import React from 'react';
import '../ProjectDetail1/css/Hero.css';
import backgroundimage from '../../assets/Dr.Vijayalakshmi (8).webp';

const Hero = () => {
  return (
    <div className="unimaxx-hero-viewport" style={{ backgroundImage: `url("${backgroundimage}")` }}>
      <div className="unimaxx-hero-darkener"></div>
      
      <div className="unimaxx-hero-bound-box">
        <div className="unimaxx-hero-text-cluster">
          
        
          <h1 className="unimaxx-hero-headline font-geist">
          A Contemporary Home <br/> Designed Around Everyday Living
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            A thoughtfully planned residence that brings together contemporary aesthetics, practical spatial planning, and a comfortable living experience. The design is developed around the requirements of the home while giving each space a clear sense of purpose and character.  
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;