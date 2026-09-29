import React from 'react';
import '../ProjectDetail1/css/Hero.css';
import backgroundimage from '../../assets/thara (7).webp';

const Hero = () => {
  return (
    <div className="unimaxx-hero-viewport" style={{ backgroundImage: `url("${backgroundimage}")` }}>
      <div className="unimaxx-hero-darkener"></div>
      
      <div className="unimaxx-hero-bound-box">
        <div className="unimaxx-hero-text-cluster">
          
        
          <h1 className="unimaxx-hero-headline font-geist">
            A Contemporary Residence <br/> Designed for Refined Living
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            A thoughtfully planned residence that combines contemporary architectural expression with practical spatial planning and comfortable living. The design is developed around the requirements of the home, creating a balanced environment with a clear and cohesive character. 
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;