import React from 'react';
import '../ProjectDetail1/css/Hero.css';
import backgroundimage from '../../assets/meenamadurai (39).webp';

const Hero = () => {
  return (
    <div className="unimaxx-hero-viewport" style={{ backgroundImage: `url("${backgroundimage}")` }}>
      <div className="unimaxx-hero-darkener"></div>
      
      <div className="unimaxx-hero-bound-box">
        <div className="unimaxx-hero-text-cluster">
          
        
          <h1 className="unimaxx-hero-headline font-geist">
           A Modern Home<br/>with Understated Elegance
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            Meena Residence explores contemporary residential design through considered layouts and
refined architectural elements. The planning brings together everyday functionality and
visual harmony, shaping a comfortable home where space, proportions, and design details
contribute to an elegant living environment.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;