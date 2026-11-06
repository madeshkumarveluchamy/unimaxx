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
            Designed with Clarity, <br/>  Planned for Living
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            Pritham Residence demonstrates an approach to home design that prioritises thoughtful
organisation and architectural simplicity. Its spatial planning establishes practical living areas
and smooth circulation, bringing together contemporary aesthetics and everyday
functionality in a well-defined residential setting
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;