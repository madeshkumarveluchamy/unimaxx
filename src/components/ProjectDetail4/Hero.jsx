import React from 'react';
import '../ProjectDetail1/css/Hero.css';
import backgroundimage from '../../assets/EivvaVilla21 (32).webp';

const Hero = () => {
  return (
    <div className="unimaxx-hero-viewport" style={{ backgroundImage: `url("${backgroundimage}")` }}>
      <div className="unimaxx-hero-darkener"></div>
      
      <div className="unimaxx-hero-bound-box">
        <div className="unimaxx-hero-text-cluster">
          
        
          <h1 className="unimaxx-hero-headline font-geist">
          Thoughtful Architecture <br/> for Contemporary Living
          </h1>
      
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            Mr. Balachandar Residence explores a practical approach to contemporary architecture,
combining efficient layouts with a distinctive visual identity. The design considers spatial
relationships and everyday requirements, shaping a comfortable home where functionality
and architectural expression complement one another.

          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;