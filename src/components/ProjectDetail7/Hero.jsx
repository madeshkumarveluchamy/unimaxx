import React from 'react';
import '../ProjectDetail1/css/Hero.css';
import backgroundimage from '../../assets/Gowthami2.webp';

const Hero = () => {
  return (
    <div className="unimaxx-hero-viewport" style={{ backgroundImage: `url("${backgroundimage}")` }}>
      <div className="unimaxx-hero-darkener"></div>
      
      <div className="unimaxx-hero-bound-box">
        <div className="unimaxx-hero-text-cluster">
          
        
          <h1 className="unimaxx-hero-headline font-geist">
            A Contemporary Home <br/>Designed for Comfortable Living
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            A thoughtfully planned residence that combines contemporary architectural character with practical spatial planning. The design focuses on creating comfortable, well-connected spaces while giving the home a distinct and cohesive identity.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;