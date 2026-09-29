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
           A Contemporary Residence <br/> Shaped for Modern Living 
          </h1>
      
      
          <p className="unimaxx-hero-category font-geist fsub">Architecture | Residential</p>
          
     
          <p className="unimaxx-hero-paragraph font-geist fmin">
            A thoughtfully planned residence that brings together contemporary design, practical spatial planning, and a comfortable everyday living experience. The design is developed to make the most of the available space while creating a home with a distinct architectural character. 
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;