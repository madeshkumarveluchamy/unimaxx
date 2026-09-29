import React from 'react';
import '../ProjectDetail1/css/Hero.css';
import backgroundimage from '../../assets/Pritham (23).webp';

const Hero = () => {
  return (
    <div className="unimaxx-hero-viewport" style={{ backgroundImage: `url("${backgroundimage}")` }}>
      <div className="unimaxx-hero-darkener"></div>
      
      <div className="unimaxx-hero-bound-box">
        <div className="unimaxx-hero-text-cluster">
          
        
          <h1 className="unimaxx-hero-headline font-geist">
            A Thoughtfully Planned <br/> Home for Modern Living 
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            A well-planned residence that combines contemporary design with practical spatial planning. The home is shaped around everyday requirements, creating comfortable spaces with a clear sense of flow, proportion, and architectural character. 
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;