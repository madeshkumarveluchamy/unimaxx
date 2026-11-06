import React from 'react';
import '../ProjectDetail1/css/Hero.css';
import backgroundimage from '../../assets/Thara Residence (3).webp';

const Hero = () => {
  return (
    <div className="unimaxx-hero-viewport" style={{ backgroundImage: `url("${backgroundimage}")` }}>
      <div className="unimaxx-hero-darkener"></div>
      
      <div className="unimaxx-hero-bound-box">
        <div className="unimaxx-hero-text-cluster">
          
        
          <h1 className="unimaxx-hero-headline font-geist">
            A Home Where <br/> Modern Design Meets Comfort
          </h1>
          
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            Thara Residence showcases a thoughtful blend of modern architecture and functional
design. Every space is planned to support comfortable living, with balanced proportions,
purposeful layouts, and a distinctive character that reflects the essence of the home.

          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;