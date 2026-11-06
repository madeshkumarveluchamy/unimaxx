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
           Spaces That Bring<br/>Comfort and Character Together
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            Gowthami Residence reflects a carefully considered residential design, where spatial
organisation meets contemporary aesthetics. The layout establishes a natural connection
between living areas, creating an inviting atmosphere with functional spaces and a
consistent architectural character throughout the home.

          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;