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
           Modern Architecture<br/>with Meaningful Spaces
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            Mr. Shanmugam Residence is developed around the principles of practical planning and
contemporary architectural design. Each space contributes to the overall living experience,
creating a well-organised home that connects functionality, comfort, and a distinctive
architectural identity
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;