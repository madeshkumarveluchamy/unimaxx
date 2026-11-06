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
         A Personalised Home <br/> with Contemporary Character
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            Dr. Vijaylakshmi Residence reflects a considered approach to modern home design, where
aesthetics and functionality work together. The planning gives importance to everyday
comfort, organised spaces, and architectural details that create a welcoming atmosphere
with individual character.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;