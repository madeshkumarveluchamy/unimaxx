import React from 'react';
import '../ProjectDetail1/css/Hero.css';
import backgroundimage from '../../assets/EivvaVilla 32  (38).webp'; // உங்களது இமேஜ் இருக்கும் சரியான file path-ஐ இங்கே கொடுக்கவும்

const Hero = () => {
  return (
    <div className="unimaxx-hero-viewport" style={{ backgroundImage: `url("${backgroundimage}")` }}>
      <div className="unimaxx-hero-darkener"></div>
      
      <div className="unimaxx-hero-bound-box">
        <div className="unimaxx-hero-text-cluster">
          
        
          <h1 className="unimaxx-hero-headline font-geist">
           A Contemporary Residence<br/>with Purposeful Design 
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            A thoughtfully planned home that brings together contemporary architectural character, functional spaces, and a comfortable living experience. The design is shaped around the requirements of modern living while giving the residence a distinct and cohesive identity.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;