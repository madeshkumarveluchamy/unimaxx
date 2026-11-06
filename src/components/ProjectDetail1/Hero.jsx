import React from 'react';
import './css/Hero.css';
import backgroundimage from '../../assets/cafe (1).webp';

const Hero = () => {
  return (
    <div className="unimaxx-hero-viewport" style={{ backgroundImage: `url("${backgroundimage}")` }}>
      <div className="unimaxx-hero-darkener"></div>
      
      <div className="unimaxx-hero-bound-box">
        <div className="unimaxx-hero-text-cluster">
          
        
          <h1 className="unimaxx-hero-headline font-geist">
           A Contemporary Expression<br/>of Comfortable Living
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Commercial</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
          Modern Nest brings together contemporary architectural forms and thoughtfully integrated
interiors to create a distinctive living environment. The design focuses on the relationship
between spaces, everyday functionality, and visual simplicity, resulting in a home that feels
cohesive, comfortable, and inviting
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;